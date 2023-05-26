import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import Task from "@/components/Task/Task";

export default function Home() {
  const bodyStyle = {
    backgroundColor: "#C85250", // Set the desired background color
  };
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-red-600"
      // style={bodyStyle}
    >
      <div className="w-[90%] md:w-[70%] lg:w-[50%]">
        <Navbar />
        <Main />
        <Task />
      </div>
    </div>
  );
}
