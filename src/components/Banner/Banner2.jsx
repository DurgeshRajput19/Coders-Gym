import React from "react";
import { motion } from "framer-motion";
import { Slideleft } from "../utility/animation";

export default function Banner2() {
  return (
    <div className="container my-14  ">
      <div className="bg--[#f9f9f9] py-14 md:py-24 flex justify-center items-center ">
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44   ">
          <motion.h1
            variants={Slideleft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase "
          >
            Get 25% Discount on Your FIrst Order , Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={Slideleft(0.7)}
            initial="hidden" 
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            We Wil make sure you get the right and the best quality products for
            your workout
          </motion.p>
          <motion.div
            variants={Slideleft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6   "
          >
            <button className="primary-btn">Learn More</button>
            <button className="border-2 border-primary text-primary font-bold px-5 rounded-lg ">
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
