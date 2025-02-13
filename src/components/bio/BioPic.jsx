import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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
        src="../../images/yeee.webp"
        alt="Picture of Khalid, a software developer, coding on his laptop "
        className="max-h-[320px] w-auto"
      />
    </motion.div>
  );
};

export default BioPic;
