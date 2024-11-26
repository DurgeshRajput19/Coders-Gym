import React from "react";
import { FaPlay } from "react-icons/fa";
import hero from "../../assets/pngwing.com.png";
import { motion } from "framer-motion";
import { Slideleft, SlideRight } from "../utility/animation";

export default function Hero() {
  return (
    <div>
      <section>
        <div className="container grid grid-col-1 md:grid-cols-2 min-h-[650px] relative ">
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair ">
            <div className="text-center md:text-left space-y-6  ">
              <motion.h1
                variants={SlideRight(0.4)}
                initial="hidden" 
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Transform Your Body, Elevate Your{" "}
                <span className="text-primary ">Life.</span>
              </motion.h1>
              <motion.p variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible" className="text-gray-600 xl:max-w-[500px]    ">
                Your fitness journey starts here. State-of-the-art equipment,
                expert trainers, and a supportive community to help you achieve
                your goals
              </motion.p>
              <motion.div variants={SlideRight(0.8)}
                initial="hidden"
                animate="visible" className="flex justify-center items-center gap-8 md:justify-start !mt-4 ">
                <button className="primary-btn flex items-center gap-2   ">
                  Order Now
                </button>
                <button className="flex  justify-center gap-2 items-center  ">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <motion.img 
              initial="hidden"
              variants={Slideleft(0.8)}
              animate="visible"
              src={hero} 
              alt=""
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow  "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
