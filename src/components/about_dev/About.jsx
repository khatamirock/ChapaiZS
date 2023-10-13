import React from "react";
// import "../app.css";
import "./about_css.css";
import my_av from "../../assets/zim/my_av.png";
const About = () => {
  return (
    <div className="bg-primary flex justify-center align-center h-[100vh]">
      <div class="card-container   grid grid-cols-1 sm:grid-cols-2">
        <img class="round" src={my_av} alt="user" />
        <div className="infoTx">
          <h2 className="name p-4">
            Md. Khatami - <span>CSE'18</span>{" "}
          </h2>
          <h6>Chapai Nawabganj</h6>
          <p>
            Web developer and <br /> front-end | backend developer
          </p>
        </div>
        <div class="skills">
          <h2>designer | developer of this website</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
