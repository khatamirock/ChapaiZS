import React from "react";
import "./info_edit.css";

const Info_editor = ({ isVisible, onClose }) => {
  return (
    <div className="edit_window">
      <h2>Confirmation</h2>
      <p>Are you sure you want to proceed?</p>
      <button onClick={() => onClose(false)}>Cancel</button>
      <button>Confirm</button>
    </div>
  );
};

export default Info_editor;
