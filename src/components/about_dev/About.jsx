import React from "react";
// import "../app.css";
import "./about_css.css";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

import my_av from "../../assets/zim/my_av.png";
const About = () => {
  return (
    <div className="bg-primary flex justify-center items-center h-[100vh]">
      <div class="card-container   grid grid-cols-1 sm:grid-cols-2">
        <img class="round" src={my_av} alt="user" />
        <div className="infoTx">
          <h2 className="name p-4">
            Md. Khatami - <span>CSE'18</span>{" "}
          </h2>
          <h6>Chapai Nawabganj</h6>
          <p>
            Full stack Web developer | <br />
          </p>
          <div className="links ">
            <a className="fb p-2" href="https://www.facebook.com/ronin.returns">
              <BsFacebook />
            </a>{" "}
            <a className="p-2 phn" href={`tel:${"01743330066"}`}>
              <BsFillTelephoneFill />
            </a>
          </div>
        </div>
        <div class="skills ">
          <h2>designer | developer of ChapaiNawabganj Zilla samiti website</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
