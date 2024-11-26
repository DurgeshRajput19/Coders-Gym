import React, { useState } from "react";
import { tabsdata } from "../../mockData/data";
import { motion } from "framer-motion";

export default function Tab() {
  const [active, setactive] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Dance"];

  const filteredcard =
    active === "All"
      ? tabsdata
      : tabsdata.filter((card) => card.category === active);
  return (
    <div>
      <div className="container my-12 md:my-16   ">
        <div className="flex space-x-4 mb-4 p-6 ">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setactive(item)}
              className={`py-2 px-4 rounded ${
                active === item
                  ? "bg-primary text-white "
                  : "bg-gray-200 text-gray-700"
              }   `}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {filteredcard.map((card) => (
            <motion.div
              id={card.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={card.id}
              className="p-4 border rounded shadow-sm space-y-2 "
            >
              <img
                src={card.image}
                alt=""
                className="h-[240px] w-full object-cover  "
              />
              <p className="text-xl font-semibold ">{card.info}</p>
              <p className="text-gray-500">{card.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
