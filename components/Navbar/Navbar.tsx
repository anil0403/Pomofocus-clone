import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between py-4">
      <div className="flex flex-row gap-2 items-center text-2xl font-semibold cursor-pointer">
        <BsCheckCircleFill size={20} />
        <h1 className="">Pomofocus</h1>
      </div>
      <ul className="flex flex-row gap-5 justify-between items-center text-md">
        <li className="flex flex-row px-2 py-1 items-center gap-1 text-lg bg-white/10 rounded-md hover:bg-white/20 cursor-pointer">
          <BiBarChartSquare />
          <span className="hidden md:block"> Report</span>
        </li>
        <li className="flex flex-row px-2 py-1 items-center gap-1 text-lg bg-white/10 rounded-md hover:bg-white/20 cursor-pointer">
          <AiFillSetting />
          <span className="hidden md:block"> Settings</span>
        </li>
        <li className="flex flex-row px-2 py-1 items-center gap-1 text-lg bg-white/10 rounded-md hover:bg-white/20 cursor-pointer">
          <FaUserCircle />
          <span className="hidden md:block"> Login</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
