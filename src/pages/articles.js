import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/all about my crush on React.jpg";
// import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
// import blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
// import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
// import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
// import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
// import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
// import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles Page | Estefania's Portfolio</title>
        <meta name="description" content="Discover the latest projects and articles written by Estefania, a Next.js developer with 
        expertise in JavaScript and React.js." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Check out my Latest Articles"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="All about my crush on React.js"
              time="5 min read"
              summary="My first experience with React."
              link="https://medium.com/@estefaniaquevedolusby/all-about-my-crush-on-react-js-9bb4dacb5edf"
            />
            
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="My reflections halfway through a coding bootcamp: the good, the bad and the ugly: UNCENSORED."
              //img={}//
              date="May 2022"
              link="https://estefaniaquevedolusby.medium.com/my-reflections-halfway-through-a-coding-bootcamp-the-good-the-bad-and-the-ugly-uncensored-ed66db7be369"
            />
            <Article
              title="From Literature to coding: This is not Kansas anymore"
              //img={}//
              date="April 2022"
              link="https://estefaniaquevedolusby.medium.com/from-literature-to-coding-this-is-not-kansas-anymore-dcd1c5d28339"
            />
            <Article
              title="The Starting-from-scratch Developer's Mini-guide"
              //img={}//
              date="March 2022"
              link="https://estefaniaquevedolusby.medium.com/the-starting-from-scratch-developers-mini-guide-some-apps-review-15c59e55f266"
            />
            <Article
              title="How to Start Coding"
              //img={}//
              date="February 2022"
              link="https://www.technigo.io/explained/what-you-need-to-start-coding"
            />
            <Article
              title="Frontend, Backend, Fullstack - What's What?"
              date="January 2022"
              //img={}//
              link="https://www.technigo.io/frontend-backend-fullstack-whats-what"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
