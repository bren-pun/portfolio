import React from "react";

import resumepdf from "../assets/Bren Punzalan Front-End Web Developer Resume.pdf";
import Cursor from "../utils/Cursor";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Divider from "./Divider";

const HeroPage = () => {
  return (
    <div className=" bg-whiter w-screen h-screen" id="HOME">
      <div className="inline-flex text-left font-Dmsans p-10 flex-col text-black">
        <Fade bottom cascade>
          <h6 className=" text-3xl sm:text-6xl mt-20 text-white">
            Hello, it's me
          </h6>

          <h1 className="text-5xl sm:text-9xl mt-1 font-bold text-">BREN</h1>
          <h1 className="text-5xl sm:text-9xl mt-1 font-bold">PUNZALAN.</h1>
        </Fade>
        <motion.h3
          className="text-3xl sm:text-6xl mt-3 font-semibold text-white"
          animate={{
            opacity: [0, 1],
            transition: { duration: 3 },
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Web Developer", "Front-End Developer", "UI Developer"],
            }}
          />
        </motion.h3>
      </div>

      <Fade bottom>
        <motion.span className="p-5 ml-11 bg-black text-whiter inline text-lg font-medium rounded-xl hover:bg-white hover:text-slate-900  hover:py-6 cursor-pointer transition-all">
          <a href={resumepdf} download>
            Resume
          </a>
        </motion.span>
      </Fade>
    </div>
  );
};

export default HeroPage;
