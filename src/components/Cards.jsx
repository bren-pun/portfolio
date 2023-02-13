import { Api, GitHub, Launch } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";

const Cards = ({ title, story, feature, site, github, bgImage, data }) => {
  return (
    <>
      <div
        className="w-full h-full relative transition-all duration-200 hidden sm:block"
        loading="lazy"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "100% 100%",
          objectFit: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(31, 63, 100, 0.79)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="w-10 h-10 absolute -top-5 left-1/2 flex justify-center items-center z-50"
          animate={{ rotate: [90, 180, 270, 360] }}
          transition={{ type: "spring", duration: 2, repeat: Infinity }}
        >
          <Api />
        </motion.div>
        <div className="z-20 h-full w-full absolute p-4 flex flex-col font-Dmsans">
          <div className="flex justify-between">
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ type: "spring", duration: 5, repeat: Infinity }}
            >
              <IconButton className="left" onClick={() => window.open(site)}>
                <Launch fontSize="large" sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ type: "spring", duration: 5, repeat: Infinity }}
            >
              <IconButton
                className="justify-end"
                onClick={() => window.open(github)}
              >
                <GitHub fontSize="large" sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </motion.span>
          </div>

          <div>
            <motion.h1
              className="text-white text-7xl font-thin text-center my-5 md:text-5xl"
              animate={{ opacity: [0, 1] }}
              whileHover={{ color: "#8AEDA3" }}
              transition={{ type: "spring", duration: 3 }}
            >
              {title}
            </motion.h1>
          </div>

          <motion.div
            animate={{ marginLeft: 0, marginRight: 0 }}
            transition={{ ease: "easeOut", duration: 5 }}
            className="w-auto mx-96 h-0.5 bg-white text-left"
          />

          <div className=" text-sm sm:text-2xl h-full flex justify-center items-center tracking-normal leading-normal px-5">
            <div>
              <Fade bottom>
                <motion.p
                  className="text-base lg:text-2xl"
                  whileHover={{ color: "#8AEDA3" }}
                >
                  {story}
                </motion.p>
              </Fade>
              <Fade bottom>
                <motion.p
                  className="mt-4 text-base lg:text-2xl"
                  whileHover={{ color: "#8AEDA3" }}
                >
                  {feature}
                </motion.p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-opacity flex flex-col z-10 opacity-80"></div>
      </div>

      <h1 className="block sm:hidden text-6xl font-bold">Projects</h1>

      {data.map((data) => (
        <Fade bottom>
          <div>
            <Card
              className="flex flex-col  sm:hidden w-auto h-auto my-5  p-2 relative"
              key={data?.key}
              sx={{
                backgroundImage: `url(${data.bgImage})`,
                backgroundColor: "#2F557A",
                backgroundBlendMode: "multiply",
              }}
            >
              <Fade bottom cascade>
                <h1 className="text-3xl text-center text-black font-bold">
                  {data?.title}
                </h1>

                <p className="text-white text-lg mt-2">{data?.story}</p>
                <p className="text-white text-lg "> {data?.feature}</p>
              </Fade>
              <div className="flex justify-between">
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring", duration: 5, repeat: Infinity }}
                >
                  <IconButton
                    className="left"
                    onClick={() => window.open(site)}
                  >
                    <Launch fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                </motion.span>
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring", duration: 5, repeat: Infinity }}
                >
                  <IconButton
                    className="justify-end"
                    onClick={() => window.open(github)}
                  >
                    <GitHub fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                </motion.span>
              </div>
            </Card>
          </div>
        </Fade>
      ))}
    </>
  );
};

export default Cards;
