import React from "react";
import {
  zla_logo,
  chapai_hero,
  ply_evnt,
  evt_decor,
  star,
  c,
  contact_logo,
  slash,
} from "../../assets";
import styles from "../../style";
import "./home.css";
import Carousel from "../carousel/Carousel";

const Home_section = () => {
  return (
    <div className="div">
      <div className="Main z-[-3] bg-primary sm:p-[55px] p-[5px] ">
        <div className="hero    grid grid-cols-1 sm:grid-cols-2">
          <img className="hero_img " src={chapai_hero} alt="" srcset="" />
          <div className="hero_text">
            <h1 className="welcome">
              <span> Welcome</span> to Chapai Zilla Somiti
            </h1>
            <p className="hero_para">
              Step into the heart of Chapai, where friendships flourish,
              laughter fills the air, and goodness thrives. At Chapai Zilla
              Somiti, we believe in the power of community and the bonds that
              tie us together
            </p>
          </div>
        </div>
        <div className="about_us pt-2 sm:pt-0 grid grid-cols-1 sm:grid-cols-2">
          <div className="text">
            <h1 className="title text-bold">About Us</h1>

            <p className="abt_p sm:p-2 sm:m-10 m-0 z-[6]">
              Chapai Zilla Somiti is not just an association; it's a family.
              Founded on the values of friendship, Bonding , and goodness, we
              have been serving our community for 10 years. Our journey is a
              testament to the strong bonds that unite us and the playful spirit
              that keeps us going. With open hearts and open arms, we welcome
              you to become a part of our ever-growing family.
            </p>
          </div>
          <div className="imgdiv">
            <img className="slash z-[2]" src={slash} alt="" srcset="" />
            {/* <img className="star" src={star} alt="" srcset="" /> */}
            <Carousel className="ab_carousel z-[3]" />
            <div className={`grd z-[1] blur-[30px] ${styles.grd_sunst}`}></div>
          </div>
        </div>

        <div className="z-[2] pt-[40px] sm:pt-0  events_actvty grid grid-cols-1 sm:grid-cols-2">
          <div className="event_img flex-1 relative z-[2]">
            <img className="z-[2]" src={ply_evnt} alt="" srcset="" />

            <img
              className="decor absolute z-[1]"
              src={evt_decor}
              alt=""
              srcset=""
            />
          </div>
          <div className="text">
            <h1 className="title text-bold">Events and Activities</h1>
            <p className="abt_p sm:p-2 m-10">
              Get ready to dive into a world of excitement and laughter. Our
              association hosts a wide range of events and activities throughout
              the year, designed to bring people together in the spirit of
              playfulness and camaraderie. From sports tournaments to cultural
              festivals, there's something for everyone to enjoy.
            </p>
          </div>
        </div>

        <div className="contact_us pt-[90px] grid grid-cols-1 sm:grid-cols-2 ">
          <div className="text">
            <h1 className="title">Contact Us</h1>
            <p className="abt_p sm:p-2 m-10">
              Have questions or want to reach out? We'd love to hear from you.
              Feel free to contact us through the provided channels. We're
              always here to chat, plan, and spread the joy of friendship and
              goodness.
            </p>
            <div className="callAction">
              <div className="phone flex">
                <div className="txt_phone p-3">Cell1</div>
                <h3 className="phone_no p-3">017_____________</h3>
              </div>
              <div className="phone mt-2 flex">
                <div className="txt_phone p-3">Cell2</div>
                <h3 className="phone_no p-3">017_____________</h3>
              </div>
              <div className="phone mt-2 flex">
                <div className="txt_phone p-3">Cell3</div>
                <h3 className="phone_no p-3">017_____________</h3>
              </div>
            </div>
          </div>

          <div className="img">
            {<img src={contact_logo} alt="" srcset="" />}
          </div>
        </div>
      </div>

      <div className="footer  w-full">
        <div className="logo">
          <img
            className="zlalogo w-[90px] pt-10 pb-10 pl-4 pr-4"
            src={zla_logo}
            alt=""
            srcset=""
          />
          <div className="logoTx">Togather we Stand</div>
        </div>
        <div className="right">
          <div className="copyrt p-[40px]">
            © 2023 <span>ChapaiNawabganj Zilla Samiti</span>. All rights
            reserved, including digital assets and logos owned by the
            organization.
          </div>
          <div className="social">
            <div className="fac"></div>
            <div className="email"></div>
          </div>
        </div>
      </div>
      <div className="by_me">
        <h2>Developed | Designed | Maintained with Care ❤️ by Md. Khatami</h2>
      </div>
    </div>
  );
};

export default Home_section;
