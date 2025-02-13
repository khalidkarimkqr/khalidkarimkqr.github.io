import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link !== "#" ? link : undefined} // Disable link if it's "#"
          target={link !== "#" ? "_blank" : undefined} // Open in new tab only if valid link
          rel={link !== "#" ? "noopener noreferrer" : undefined} // Add security attributes
          className={`text-lg flex gap-2 items-center text-white ${
            link !== "#"
              ? "text-cyan hover:text-orange cursor-pointer"
              : "text-gray-500 cursor-not-allowed"
          } transition-all duration-500 ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          {link !== "#" ? (
            <>
              View <BsFillArrowUpRightCircleFill />
            </>
          ) : (
            "Coming Soon"
          )}
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
