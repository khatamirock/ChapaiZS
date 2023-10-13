import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tab from "./Tab";
import "./tabstyle.css";
import { tabs } from "../../constants";

const SlidingTabs = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const topOffset = 100; // Adjust this value based on your needs
      const isOnTop = window.scrollY >= topOffset;
      setIsSticky(isOnTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setActiveTab2] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab2(activeTab);
    setActiveTab(index);
  };

  return (
    <div className="text-white relative tabMain">
      <div
        className={`tabtitle bg-primary z-[1] 
      ${isSticky ? "stickOnTop" : ""}
      `}
      >
        {/* change the color later!! */}
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="tabcontent w-full bg-primary"
          key={activeTab} // Add key prop for smooth transition
          initial={{ opacity: 0, x: prevTab > activeTab ? -40 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: prevTab < activeTab ? 20 : -40 }}
          transition={{ duration: 0.3 }}
          style={{ position: "absolute", top: "100%" }}
        >
          {
            <div>
              {tabs[activeTab].title}
              {/* {tabs[activeTab].info} */}
              <div className="goToTop"></div>
            </div>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidingTabs;
