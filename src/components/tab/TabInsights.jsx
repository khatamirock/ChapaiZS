import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { Zillasom } from "../../assets/CSV/zilla";
import Eachuser from "./Eachuser";
import supabase from "../supabaseHander/GetTestdat";
import { AiFillHome } from "react-icons/ai";

import { Link } from "react-router-dom";

function simple(mem, idx, src, setCard, clicked) {
  const ids = mem.Photo;
  let url = "123";
  if (ids != null) {
    const id = ids.split("id=")[1];
    url = src + id;
  }

  const phone = String(mem.Phone);

  // // Check if the phone number starts with "01" and add a "0" if it doesn't start with "01" or "+88".
  // if (!phone.startsWith("01") && !phone.startsWith("+88")) {
  //   phone = "0" + phone;
  // }
  return (
    <m.div
      whileHover={{ scale: 1.03 }}
      key={idx}
      className="eachMem mt-4 pb-3 bg-fornery relative "
      onClick={() => {
        setCard(idx);

        console.log(idx);
      }}
    >
      <div className="blood_grp absolute top-0 right-0">{mem.Blood_Group} </div>
      <div className="mem_info mt-[12px]">
        <div className="mem_name">{mem.Name}</div>
        <div className="from_addr flex     align-center">
          {<AiFillHome size={20} className="mr-2" />} {mem.Permanent_Address}
        </div>
        <p className="phone">{mem.Phone}</p>
        <p className="Dept">{mem.Department + " - " + mem.Series}</p>
      </div>
    </m.div>
  );
}

const Tab1 = () => {
  return (
    <div className="containerMem grid-cols-1  sm:ml-[20%] sm:mr-[20%] ml-4 mr-4">
      {Zillasom.map((mem, idx) => {
        return (
          <div to={`/user/${idx + 1}`}>{simple(mem, idx, null, null)}</div>
          // <div to={`/user/${idx + 1}`}>{simple(mem, idx, null, null)}</Link>
        );
      })}
    </div>
  );
};
const Tab2 = () => {
  let baseDriveUrl = "https://drive.google.com/uc?export=view&id=";
  const [zillbase, setZillbase] = useState([]);
  var [clickedCard, setclickedCard] = useState(-1);

  useEffect(() => {
    const storedData = localStorage.getItem("member");

    if (storedData) {
      setZillbase(JSON.parse(storedData));
    } else {
      fechmem();
    }
  }, []);

  const fechmem = async (e) => {
    const { data, error } = await supabase.from("member").select();
    if (error) {
      console.log(error);
    }
    localStorage.setItem("member", JSON.stringify(data));
    setZillbase(data);
  };

  return (
    // sm:grid-cols-2 grid-cols-1
    <div className="containerMem grid-cols-1   sm:ml-[20%] sm:mr-[20%] ml-4 mr-4">
      {zillbase.map((dat, idx) => {
        return (
          <Link to={`/user/${dat.ID}`}>
            {simple(dat, idx, baseDriveUrl, setclickedCard, clickedCard)}
          </Link>
        );
      })}
    </div>
  );
};

export { Tab1, Tab2 };
