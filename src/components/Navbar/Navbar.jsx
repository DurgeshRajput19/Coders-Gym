import React, { useState } from "react";
import { navbarmenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div>
      <nav className="container flex justify-between items-center py-8 ">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase  ">
          <FaDumbbell />
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>
        <div className="hidden md:block ">
          <ul className="flex items-center gap-6 text-gray-600 ">
            {navbarmenu.map((item) => (
              <li key={item.id}>
                <a
                  className="inline-block py-1 px-3 hover:text-primary font-semibold "
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4 ">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 ">
            <CiSearch className="" />
          </button>

          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 ">
            <FaCartArrowDown />
          </button>
          <button className="hover:bg-primary text-primary hover:text-white font-semibold rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block  ">
            Login
          </button>
        </div>
        <div className="md:hidden " onClick={() => setopen(!open)}>
          <MdMenu className="text-4xl " />
        </div>
      </nav>

      <ResponsiveMenu open={open} />
    </div>
  );
}
