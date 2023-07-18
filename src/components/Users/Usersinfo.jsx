import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../supabaseHander/GetTestdat";

import "./SignUpuser.css";
const Usersinfo = () => {
  const [user, setUser] = useState("Loadng......");
  const { id } = useParams();
  const base_drive = "https://drive.google.com/uc?export=view&id=";
  const [photo, setPhto] = useState();
  useEffect(() => {
    const fetchUser = async (e) => {
      // const { data, error } = await supabase
      //   .from("member")
      //   .select() //or whatever u want////
      //   .eq("ID", id);
      // console.log("checking!!!");
      // if (error) {
      //   console.log(error);
      // }

      const storedData = JSON.parse(localStorage.getItem("member"))[id - 1];

      console.log(JSON.parse(localStorage.getItem("member"))[1]);
      setUser(storedData);
      var phto = storedData.Photo;
      if (phto != null) {
        const id = phto.split("id=")[1];

        console.log(base_drive + id);
        setPhto(base_drive + id);
      }
      // e.preventDefault;
    };

    fetchUser();
  }, []);

  return (
    <div className="MianDiv h-[100vh] bg-primary sm:p-20 p-6 pt-10">
      {/* <div className="back">{"<<"}</div> */}
      <div className="wrapper">
        <div className="imgName flex">
          <div className="img sm:w-[20%] w-[100px]">
            <img src={photo} alt="" srcset="" />
          </div>
          <div className="Id_name">
            <h1 className="name">{user.Name}</h1>
            <h1 className="series">
              {user.Department} -{user.Series - 2000}
            </h1>
            <div className="addr">
              <h3>{user.PermAddress}</h3>
            </div>
          </div>
        </div>
        <div className="devider"></div>

        <div className="about">
          <h1 className="about_h1">ABOUT..</h1>

          <div className="email">
            <h3>{user.Email}</h3>
          </div>
          <div className="currJob">
            <h3>{user.Job}</h3>
          </div>
          <div className="bloodGrp">
            <h1>{`${user.Blood_Group}`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usersinfo;
