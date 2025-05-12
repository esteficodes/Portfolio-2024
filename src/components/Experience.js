import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Frontend Developer"
              company="Nordinsight"
              companyLink="https://nordinsight.com/"
              time="March 2025 - May 2025 Internship"
              address="Remote"
              work="Worked on a full-stack notification system for a medical platform using React (TypeScript), Express, and MongoDB.
               I focused on user-specific notifications, role-based visibility, and dynamic UI updates using Context API, REST APIs, and TailwindCSS — 
               keeping my skills sharp and deepening my experience in production-level feature development."
            />
            <Details
              position="Frontend Developer"
              company="COBOD International"
              companyLink="https://cobod.com/"
              time="May 2023 - October 2024"
              address="Skudehavnsvej 17A, 2150 København"
              work="Responsible for managing and enhancing a WordPress-based website, ensuring optimal functionality and user experience.
              
              Tasks included customizing and updating the existing website, troubleshooting and repairing base code issues to maintain site integrity. Leveraged technologies such as PHP, HTML, CSS, JavaScript, and MySQL to implement custom solutions and enhance performance. Implemented VCL (Varnish Configuration Language) snippets in the CDN to optimize the website's performance and enable the upload of large files. This customization ensured smooth and efficient handling of heavy content, improving the overall user experience and site functionality. 

Additionally, tasked with developing a new website from the ground up, based on a Figma wireframe. This involved translating design specifications into a fully functional and responsive website using modern front-end technologies, including HTML5, CSS3, JavaScript, and integrating with the WordPress CMS adding Elementor. Emphasized cross-browser compatibility, mobile responsiveness, and adherence to best practices in web development.

Throughout the project, utilized version control systems such as Local Wp for efficient code management and collaboration. Ensured seamless integration of third-party plugins and APIs to extend functionality. Conducted thorough testing and debugging to guarantee a smooth and engaging user experience. Maintained comprehensive documentation and provided ongoing support to ensure long-term site stability and performance."
            />

            <Details
              position="Volunteer Frontend Development Teacher "
              company="ReDI School of Digital Integration Denmark"
              companyLink="https://www.redi-school.org/redi-school-denmark"
              time="Summer 2021"
              address="Menlo Park, CA."
              work="Taught the course 'Introduction to Computer Science', 
              together with other 2 volunteer teachers, within the frame of the GoIt (Go Innovate) programme. Volunteered for the frontend development course teaching HTML, CSS and JavaScript for beginners"
            />

            <Details
              position="Coding Mentor"
              company="Hack Your Future"
              companyLink="https://www.hackyourfuture.dk/"
              time=" Aug 2021- Aug 2022"
              address="Copenhagen, Denmark"
              work="Volunteered as a coding instructor, teaching HTML, CSS, JavaScript, and React to beginners. Conducted in-person classes, providing comprehensive, hands-on instruction to help students grasp fundamental and advanced concepts.
               Offered continuous support both in person and online, ensuring students received the guidance they needed to succeed. Reviewed and corrected student code on GitHub, providing constructive feedback and facilitating a deeper understanding of best coding practices. Fostered a collaborative learning environment, encouraging peer support and engagement."
            />
             <Details
              position="Code coach and Tech Writer"
              company="Technigo coding bootcamp"
              companyLink="https://www.technigo.io/"
              time="2020-2021"
              address="Online."
              work="- Supported bootcamp students through online calls and on Stack overflow. 
              Corrected workshop code for aspiring bootcamp students. Wrote articles about technology for Technigo's newsletters and blog."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
