import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { PiHexagonThin } from "react-icons/pi";

const BioPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../images/HexaPic.png"
        alt="Khalid karim"
        className="max-h-[450px] w-auto"
      />
      {/* <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className=" md:h-[100%] sm:h-[100%] min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
      </div> */}
    </motion.div>
  );
};

export default BioPic;
