import React from "react";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

AiFillPlusCircle;

const Task = () => {
  return (
    <div className="md:mx-10 mb-10">
      <p className="text-center mt-5 text-lg">
        #1 <span>Time to focus!</span>
      </p>
      <div>
        <h1 className="flex flex-row justify-between py-4 mb-5 text-lg font-semibold border-b-2">
          Tasks
          <span>
            <BsThreeDotsVertical
              className="bg-black/10 hover:bg-black/20 py-2 rounded-md cursor-pointer"
              size={40}
            />
          </span>
        </h1>

        <div className="flex flex-col gap-2 text-black">
          <div className="my-2 bg-white rounded-lg flex justify-between px-4 items-center cursor-pointer">
            <h1 className="py-5 flex items-center gap-2 text-xl font-bold ">
              <BsCheckCircleFill className="text-gray-400" size={30} /> Task 1
            </h1>
            <span className="text-xl font-bold inline-flex gap-2 items-center text-gray-500">
              0/1
              <BsThreeDotsVertical
                className="hover:bg-gray-200 py-2 rounded-md"
                size={40}
              />
            </span>
          </div>
          <div className="my-2 bg-white rounded-lg flex justify-between px-4 items-center cursor-pointer">
            <h1 className="py-5 flex items-center  gap-4 md:gap-2 text-xl font-bold ">
              <BsCheckCircleFill className="text-gray-400" size={30} /> Task 2
            </h1>
            <span className="text-xl font-bold inline-flex gap-2 items-center text-gray-500">
              0/1
              <BsThreeDotsVertical
                className="hover:bg-gray-200 py-2 rounded-md"
                size={40}
              />
            </span>
          </div>
        </div>
        <div className="my-3 border-2 border-dashed border-gray-600 rounded-lg opacity-70 hover:opacity-100 cursor-pointer">
          <h1 className="py-5  text-xl font-semibold bg-black/10 flex flex-row items-center justify-center gap-2">
            <span>
              <AiFillPlusCircle />
            </span>
            Add Task
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Task;
