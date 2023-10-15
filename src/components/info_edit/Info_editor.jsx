import React from "react";
import "./info_edit.css";
import { motion } from "framer-motion";

const Info_editor = (isVisible, onClose) => {
  console.log("opened");
  return (
    <motion.div
      className={`confirmation-window ${isVisible ? "visible" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
    >
      <h2>Confirmation</h2>
      <p>Are you sure you want to proceed?</p>
      <button onClick={onClose}>Cancel</button>
      <button>Confirm</button>
    </motion.div>
  );
};

export default Info_editor;
