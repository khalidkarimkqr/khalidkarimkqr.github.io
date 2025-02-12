import React from "react";
import BioText from "./BioText";
import BioPic from "./BioPic";

const BioMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <BioText></BioText>
        <BioPic></BioPic>
      </div>
    </div>
  );
};

export default BioMain;
