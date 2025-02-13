import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const BioText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Software Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold font-special uppercase"
      >
        Khalid Karim
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A passionate Software Developer and Student with 3 years of experience
        {/* Hi, I’m Khalid Karim, an aspiring software developer with a passion
        <br /> for building innovative solutions through technology. I have
        hands-on <br /> experience in web development and machine learning
        projects, and I possess <br /> a solid understanding of how the web
        works, from front-end interfaces to <br /> back-end systems. My journey
        in tech has fueled my desire to dive deeper <br /> into software
        engineering, where I aim to refine my skills and tackle more <br />
        complex challenges. I’m always eager to collaborate with other
        developers, <br /> contribute to meaningful projects, and learn from the
        vibrant tech <br />
        community. */}
      </motion.p>
    </div>
  );
};

export default BioText;
