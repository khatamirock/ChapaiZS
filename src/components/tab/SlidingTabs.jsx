import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tab from "./Tab";
import "./tabstyle.css";
import { tabs } from "../../constants";
const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setActiveTab2] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab2(activeTab);
    setActiveTab(index);
  };

  return (
    <div className="text-white relative tabMain">
      <div className="tabtitle bg-primary relative z-[1]">
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
          exit={{ opacity: 0, x: prevTab < activeTab ? 10 : -30 }}
          transition={{ duration: 0.3 }}
          style={{ position: "absolute", top: "100%" }}
        >
          {
            <div>
              {tabs[activeTab].title}
              {/* {tabs[activeTab].info} */}
            </div>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidingTabs;
