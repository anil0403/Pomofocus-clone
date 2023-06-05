import React from "react";
import { BsCheckCircleFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiBarChartSquare, BiUserCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useState, useCallback } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data } = useCurrentUser();
  console.log(data);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div className="w-full flex flex-row justify-between py-4 relative">
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
        {!data ? (
          <li
            onClick={() => router.push("/auth")}
            className="flex flex-row px-2 py-1 items-center gap-1 text-lg bg-white/10 rounded-md hover:bg-white/20 cursor-pointer"
          >
            <FaUserCircle />
            <span className="hidden md:block"> Login</span>
          </li>
        ) : (
          <>
            {data?.image ? (
              <img
                onClick={toggleHandler}
                src={data?.image}
                className="rounded-md cursor-pointer"
                alt="profile"
                width={30}
              />
            ) : (
              <li
                onClick={toggleHandler}
                className="flex flex-row px-2 py-1 items-center gap-1 text-lg bg-white/10 rounded-md hover:bg-white/20 cursor-pointer"
              >
                <FaUserCircle />
                <span className="hidden md:block"> Profile</span>
              </li>
            )}
          </>
        )}
      </ul>
      {toggle && (
        <div className="absolute right-0 top-16 bg-white text-black py-4 pl-4 pr-16 text-md rounded-md">
          <ul className=" flex flex-col gap-3 items-start">
            <li className="flex flex-row gap-2 items-center cursor-pointer">
              <BiUserCircle /> {data?.name}
            </li>
            <li className="flex flex-row gap-2 items-center cursor-pointer">
              <BsFillRocketTakeoffFill /> Subscription
            </li>
            <li
              onClick={() => signOut()}
              className="flex flex-row gap-2 items-center cursor-pointer"
            >
              <RiLogoutCircleFill /> Logout
            </li>
            <li className="flex flex-row gap-2 items-center cursor-pointer">
              <MdDelete /> Delete Account
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
