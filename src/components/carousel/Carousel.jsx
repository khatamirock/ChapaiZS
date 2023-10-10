// Carousel.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "./CarouselItem";
import "./carousel.css";
import {
  chapai_hero,
  logo,
  zla_logo,
  close,
  z1,
  z2,
  z3,
  z4,
  z5,
  z6,
} from "../../assets";
import styles from "../../style";
const items = [z1, z2, z3, z4, z5, z6];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentIndex}
          className="carousel-content sm:p-2 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {
            <img
              className="z-[3] carousel_main_img"
              src={items[currentIndex]}
              alt=""
              srcset=""
            />
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
