import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Bull Dozer Price Prediction",
    year: "Mar 2023",
    align: "right",
    image: "../../images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Photon Dash",
    year: "Oct 2024",
    align: "left",
    image: "../../images/website-img-2.webp",
    link: "#",
  },
  {
    name: "RecipeHub",
    year: "Dec 2023",
    align: "right",
    image: "../../images/recipehub_ss.png",
    link: "https://recipehub-khalidkarimkqr.netlify.app/",
  },
  {
    name: "Heart Disease Classification",
    year: "May 2024",
    align: "left",
    image: "../../images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
