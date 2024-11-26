import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { Slideleft } from "../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipment",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ad facilis, minus porro sapiente libero odio delectus doloribus tenetur. ",
    icon: <GrYoga />,
    link: "/",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipment",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ad facilis, minus porro sapiente libero odio delectus doloribus tenetur. ",
    icon: <FaDumbbell />,
    link: "/",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipment",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ad facilis, minus porro sapiente libero odio delectus doloribus tenetur. ",
    icon: <GiGymBag />,
    link: "/",
    delay: 0.9,
  },
];

export default function Equipments() {
  return (
    <div>
      <div className="container py-24  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair  ">
          <div className="space-y-4 p-6  ">
            <h1 className="text-3xl md:text-4xl font-bold ">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolor
              numquam natus vitae eveniet omnis minus!
            </p>
          </div>
          {EquipmentData.map((item) => (
            <motion.div
              variants={Slideleft(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]  "
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.dec}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
