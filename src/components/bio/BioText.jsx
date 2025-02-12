import React from "react";

const BioText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl  uppercase text-lightGrey ">
        Software Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold font-special uppercase">
        Khalid Karim
      </h1>
      <p className="text-lg mt-4 text-white">
        Hi, I’m Khalid Karim, an aspiring software developer with a passion
        <br /> for building innovative solutions through technology. I have
        hands-on <br /> experience in web development and machine learning
        projects, and I possess <br /> a solid understanding of how the web
        works, from front-end interfaces to <br /> back-end systems. My journey
        in tech has fueled my desire to dive deeper <br /> into software
        engineering, where I aim to refine my skills and tackle more <br />
        complex challenges. I’m always eager to collaborate with other
        developers, <br /> contribute to meaningful projects, and learn from the
        vibrant tech <br />
        community.
      </p>
    </div>
  );
};

export default BioText;
