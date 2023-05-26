import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const bodyStyle = {
    backgroundColor: "#C85250", // Set the desired background color
  };
  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={bodyStyle}
    >
      <div className="w-[90%]">
        <Navbar />
      </div>
    </div>
  );
}
