import React from "react";

const Main = () => {
  return (
    <div className=" py-5 my-5 md:m-10 bg-white/10 rounded-md">
      <ul className=" flex flex-row gap-4 justify-center md:gap-5 px-2  md:text-lg text-md font-semibold ">
        <li className="bg-black/20 px-2 py-1 rounded-md cursor-pointer">
          Pomodoro
        </li>
        <li className="bg-black/20 px-2 py-1 rounded-md cursor-pointer">
          Short Break
        </li>
        <li className="bg-black/20 px-2 py-1 rounded-md cursor-pointer">
          Long Break
        </li>
      </ul>
      <div className="flex justify-center my-10">
        <h1 className="text-8xl md:text-[8rem] font-semibold">
          25 <span> : </span>00
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-center text-red-500 px-14 py-5 text-2xl font-bold rounded-md">
          START
        </button>
      </div>
    </div>
  );
};

export default Main;
