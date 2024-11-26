import React from "react";
import { motion } from "framer-motion";
import { Slideup } from "../utility/animation";

export default function Banner({ image, title, subtitle }) {
  return (
    <div className="container">
      <div className=" bg-[#f9f9f9]   grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14  ">
        <div className="flex justify-center items-center" >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
            src={image}
            alt=""
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-[400px] object-cover   "
          />
        </div> 
        <div className="flex flex-col justify-center text-center md:text-left space-y-6 lg:max-w-[500px] ">
          <motion.p
            variants={Slideup(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold capitalize  font-playfair "
          >
            {title}
          </motion.p>
          <motion.p
            variants={Slideup(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={Slideup(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start   "
          >
            <button className="primary-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
