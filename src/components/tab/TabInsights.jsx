import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { Zillasom } from "../../assets/CSV/zilla";
import Eachuser from "./Eachuser";
import supabase from "../supabaseHander/GetTestdat";

import { Link } from "react-router-dom";
function simple(mem, idx, src, setCard, clicked) {
  const ids = mem.Photo;
  let url = "123";
  if (ids != null) {
    const id = ids.split("id=")[1];
    url = src + id;
  }

  return (
    <m.div
      whileHover={{ scale: 1.03 }}
      key={idx}
      className="eachMem mt-4 pb-3 bg-fornery "
      onClick={() => {
        setCard(idx);

        console.log(idx);
      }}
    >
      <div className="tab2_img w-[30%]">
        <img src={url} alt="" srcset="" />
      </div>
      <div className="mem_info w-[60%]">
        <div className="mem_name">{mem.Name}</div>
        <p className="phone">{mem.Phone}</p>
        <p className="Dept">{mem.Department}</p>
        <p className="Addr">{mem.PermAddress}</p>
      </div>
    </m.div>
  );
}

const Tab1 = () => {
  return (
    <div className="containerMem grid-cols-1  sm:ml-[20%] sm:mr-[20%] ml-4 mr-4">
      {Zillasom.map((mem, idx) => {
        return simple(mem, idx, null, null);
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
