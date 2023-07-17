import React from "react";
import { motion as m } from "framer-motion";
import { Zillasom } from "../../assets/CSV/zilla";
import GetTestdat from "../supabaseHander/GetTestdat";

const Eachuser = () => {
  return (
    <m.div
      // initial={{ opacity: 0, x: -10 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 0.8 }}
      className="eachuser p-10 bg-white text-bold"
    >
      {Zillasom.map((mem, idx) => {
        return (
          <div key={idx} className="eachMem mt-4 p-5">
            <div className="name">{mem.Name}</div>
            <div className="phone">{mem.Phone}</div>
            <div className="Dept">{mem.Department}</div>
            <div className="Addr.">{mem.PermAddress}</div>
          </div>
        );
      })}
    </m.div>
  );
};

export default Eachuser;
