import { useState } from "react";
import Timer from "./Timer";

const Main = () => {
  const [tab, setTab] = useState("pomorodo");
  console.log(tab);

  return (
    <>
      <Timer setTab={setTab} tab={tab} />
    </>
  );
};

export default Main;
