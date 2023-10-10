import { useState } from "react";
import { Link } from "react-router-dom";
import { close, zla_logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion as m, AnimatePresence } from "framer-motion";
import styles from "../style";
import "../constants/constant.css";
import React from "react"; // Don't forget to import React

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`relative z-[3] bg-primary w-full p-6 flex py-6 justify-between items-center navbar`}
    >
      <img
        src={zla_logo}
        alt="SOMITIE!!"
        className="relative z-[3] w-[111px] h-[111px]"
      />

      <ul
        className={`relative z-[3] list-none sm:flex hidden justify-end items-center flex-1`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`navItems font-poppins font-normal relative z-[3] nav_font cursor-pointer text-[16px] ${
              active === nav.title ? "navSel" : "navUnSel"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div
        className={`absolute top-5 left-0 ${styles.grd_cotton} z-[2] w-full h-[90px] blur-[66px] gradNav `}
      ></div>

      <div className="relative z-[4] sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="z-[4] w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <AnimatePresence>
          {toggle && (
            <m.div
              initial={{ x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: 260 }}
              transition={{ duration: 0.3 }}
              className={`slideNavBar flex`}
            >
              <ul>
                {navLinks.map((nav, index) => (
                  <Link to={nav.id}>
                    <li
                      key={nav.id}
                      className={`SlidenavItems font-poppins font-normal relative z-[3] nav_font cursor-pointer text-[16px] ${
                        active === nav.title ? "navSel" : "navUnSel"
                      } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      {nav.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
