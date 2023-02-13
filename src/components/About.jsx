import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { Fade, Reveal } from "react-reveal";
import Divider from "./Divider";
import "./Divider.css";

const About = () => {
  return (
    <>
      <Divider />
      <div
        className=" bg-whiters w-screen h-full flex flex-col sm:flex-row "
        id="ABOUT"
      >
        <div className=" sm:h-full lg:h-auto font-Dmsans text-6xl sm:text-9xl text-center  sm:p-20 font-semibold text-white hover:text-black transition-all duration-200">
          <Fade left>
            <h1>About</h1>
            <h1>Me.</h1>
          </Fade>
        </div>
        <div className="bg-whiters font-Dmsans h-auto w-full text-center  sm:text-left p-4 sm:p-20 sm:pr-28 text-2xl sm:text-3xl  leading-snug text-slate-300">
          <Fade bottom>
            <p className="hover:text-black transition-all duration-200">
              Hello! My name is Bren Punzalan and I love building stuff.
            </p>
            <p className="hover:text-black transition-all duration-200">
              {" "}
              I began my journey in Web Development started back in 2020.
            </p>
            <p className="mt-2 hover:text-black transition-all duration-200">
              When I watched a video about how to make a Django server using
              Python. That's when I discover HTML and CSS.
            </p>

            <p className="mt-2 hover:text-black transition-all duration-200">
              My interest grew and still growing now, I have fun
            </p>
            <p className="hover:text-black transition-all duration-200">
              learning and implementing various technologies
            </p>
            <p className="hover:text-black transition-all duration-200">
              I've been working with me like:
            </p>
          </Fade>
          <div className="flex  flex-col sm:flex-row">
            <div className=" flex-col gap-4">
              <Reveal bottom>
                <span className="text-2xl font-semibold flex items-center mt-5 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Javascript(ES6+)
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  React
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Node.js & Express
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  MongoDB
                </span>
              </Reveal>
            </div>

            <div className="sm:ml-10   flex-col gap-4">
              <Reveal bottom>
                <span className="text-2xl font-semibold flex items-center mt-5 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Python
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Tailwind CSS
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Material UI
                </span>
                <span className="text-2xl font-semibold flex items-center mt-4 hover:text-black transition-all duration-200">
                  <ArrowRight fontSize="medium" />
                  Framer-Motion
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
