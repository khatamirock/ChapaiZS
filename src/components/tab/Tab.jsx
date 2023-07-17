import React from "react";
import { motion as m } from "framer-motion";
const Tab = ({ label, active, onClick }) => {
  const tabStyles = {
    backgroundColor: active ? "#164B60" : "",
    color: active ? "white" : "black",
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <m.div
      // add scale anim
      animate={{ scale: active ? 1.1 : 1 }}
      className="tabName"
      style={tabStyles}
      onClick={onClick}
    >
      {label}
    </m.div>
  );
};

export default Tab;
