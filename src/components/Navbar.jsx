import { useState } from "react";
import { Link } from "react-router-dom";
import { close, zla_logo, menu } from "../assets";
import { navLinks } from "../constants";
import "../constants/constant.css";
import styles from "../style";
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
        className={`  relative z-[3] list-none sm:flex hidden justify-end items-center flex-1`}
      >
        {navLinks.map((nav, index) => (
          <Link key={index} to={nav.id}>
            <li
              key={nav.id}
              className={`font-poppins font-normal relative z-[3] nav_font cursor-pointer text-[16px] ${
                active === nav.title ? "navSel" : "navUnSel"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          </Link>
        ))}
      </ul>

      <div
        className={`absolute top-5 left-0 ${styles.grd_cotton}  z-[2] w-full h-[90px] blur-[66px] gradNav `}
      ></div>

      <div className="relative z-[4] sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
