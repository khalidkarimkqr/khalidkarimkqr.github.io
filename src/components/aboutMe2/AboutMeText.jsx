import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hi, I’m Khalid Karim, an aspiring software developer with a passion for
        building innovative solutions through technology. I have hands-on
        experience in web development and machine learning projects, and I
        possess a solid understanding of how the web works, from front-end
        interfaces to back-end systems. My journey in tech has fueled my desire
        to dive deeper into software engineering, where I aim to refine my
        skills and tackle more complex challenges. I’m always eager to
        collaborate with other developers, contribute to meaningful projects,
        and learn from the vibrant tech community.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
