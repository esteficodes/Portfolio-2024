import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
            type="Fullstack course: Deep Dive Into Modern Web Development"
            time="Currently studying"
            place="Department of Computer Science - University of Helsinki "
            info="Introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs."
          />
        <Details
            type="Online Coursework"
            time="2021-2024"
            place="Coursera, Udemy and edX"
            info="Completed coursework in advanced topics such as Computer Science, Reinforcement Learning, Computer Vision, and Machine Learning Engineering. Technologies acquied or reinforced: 
            TypeScript, Nextjs, Vercel, Tailwind, Jest."
          />
          <Details
            type="Frontend Development Bootcamp"
            time="Jan 2021 - Jun 2021"
            place="Technigo Online Coding Bootcamp"

            info="A 24-week fast-paced remote Boot Camp, focusing on JavaScript (ES6), React, HTML5, CSS and server-side programming with Node.js, with weekly projects covering everything from the basics of programming to structuring web projects using the latest technology. We worked with Agile methodology through weekly sprints planning, check-ins, demos and reflections. Mob-programming and pair-programming made up a significant part of the course.

Course highlights: 
-Java Script
- React
- React Native 
- Redux
- Node.js
- HTML5
- CSS3

Graduated in June 2021"
          />
          <Details
            type= "Professional background"
            info="My study background is very mixed:"
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
