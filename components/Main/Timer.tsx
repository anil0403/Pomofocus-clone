import React from "react";
interface TimerProps {
  setTab: any;
  tab: string;
}

const Timer: React.FC<TimerProps> = ({ setTab, tab }) => {
  return (
    <div className=" py-5 my-5 md:m-10 bg-white/10 rounded-md">
      <ul className=" flex flex-row gap-4 justify-center md:gap-5 px-2  md:text-lg text-md font-semibold ">
        <li
          onClick={() => {
            setTab("pomorodo");
          }}
          className={` px-2 py-1 rounded-md cursor-pointer ${
            tab === "pomorodo" ? "bg-black/20" : ""
          }`}
        >
          Pomodoro
        </li>
        <li
          onClick={() => {
            setTab("shortbreak");
          }}
          className={` px-2 py-1 rounded-md cursor-pointer ${
            tab === "shortbreak" ? "bg-black/20" : ""
          }`}
        >
          Short Break
        </li>
        <li
          onClick={() => {
            setTab("longbreak");
          }}
          className={` px-2 py-1 rounded-md cursor-pointer ${
            tab === "longbreak" ? "bg-black/20" : ""
          }`}
        >
          Long Break
        </li>
      </ul>
      <div className="flex justify-center my-10">
        {tab === "pomorodo" && (
          <h1 className="text-8xl md:text-[8rem] font-semibold">
            25 <span> : </span>00
          </h1>
        )}
        {tab === "shortbreak" && (
          <h1 className="text-8xl md:text-[8rem] font-semibold">
            5 <span> : </span>00
          </h1>
        )}{" "}
        {tab === "longbreak" && (
          <h1 className="text-8xl md:text-[8rem] font-semibold">
            10 <span> : </span>00
          </h1>
        )}
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-center text-red-500 px-14 py-5 text-2xl font-bold rounded-md">
          START
        </button>
      </div>
    </div>
  );
};

export default Timer;
