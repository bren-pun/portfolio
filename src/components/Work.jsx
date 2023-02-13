import React, { useState } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import bgImageOne from "../assets/1.png";
import bgImagetwo from "../assets/2.png";
import bgImagethree from "../assets/3.png";
import bgImagefour from "../assets/4.png";
import { Fade } from "react-reveal";

const Work = () => {
  const [change, setChange] = useState({
    title: "Projects",
    story:
      "Building my projects taught me a lot about problem-solving and the importance of starting with a plan. Each project was unique and I learned something new with each one. I also gained a better understanding of how to bring an idea to life and the feeling of accomplishment when it was complete.",
    feature: "",
    site: "",
    github: "",
    bgImage: bgImageOne,
  });

  const data = [
    {
      key: 2,
      title: "Portfolio",
      story:
        "I was a web developer with a dream to show the world who I am and what I can do. I knew that creating a website portfolio would be the best way to showcase my skills.",
      feature: "",
      site: "",
      github: "",
      bgImage: bgImagethree,
    },
    {
      key: 3,
      title: "Top Crypto",
      story:
        "This website provides users with up-to-date information on the cryptocurrency market, including prices, charts, and trends. It is built with React, Coingecko API, and MUI.",
      feature: "",
      site: "https://topcrypto-b8b58.web.app/",
      github: "https://github.com/bren-pun/bren-pun-Crypto-Website",
      bgImage: bgImagetwo,
    },
    {
      key: 4,
      title: "Novela",
      story:
        "Novela is an online platform that aims to make literature more accessible by providing readers with a comprehensive view of the best books.",
      feature: "comming soon...",
      site: "",
      github: "",
      bgImage: bgImagefour,
    },
  ];
  return (
    <div
      className="flex flex-col sm:flex-row h-auto w-screen text-white bg-whiters font-Dmsans"
      id="WORK"
    >
      <div className="bg-whiter w-full h-full relative p-20 hidden sm:block">
        <h1
          className="font-bold text-6xl text-left cursor-pointer"
          onClick={() =>
            setChange({
              title: "Projects",
              story:
                "Building my projects taught me a lot about problem-solving and the importance of starting with a plan. Each project was unique and I learned something new with each one. I also gained a better understanding of how to bring an idea to life and the feeling of accomplishment when it was complete.",
              feature:
                "My projects feature a variety of creative and innovative ideas that aim to solve real-world problems.",
              site: "",
              github: "",
              bgImage: bgImageOne,
            })
          }
        >
          Projects
        </h1>
        <motion.div
          animate={{ width: "100%" }}
          transition={{ ease: "easeOut", duration: 5 }}
          className="w-0  h-0.5 bg-white  mt-4"
        />

        <div className="text-7xl flex flex-col gap-8 ">
          <Fade cascade>
            <motion.h3
              className="mt-9 py-6 transition-all duration-200 cursor-pointer font-bold text-black"
              whileHover={{ color: "white" }}
              onClick={() =>
                setChange({
                  title: "Portfolio",
                  story:
                    "I was a web developer with a dream to show the world who I am and what I can do. I knew that creating a website portfolio would be the best way to showcase my skills.",
                  feature:
                    "My website portfolio showcases my skills as a web developer and allows potential employers to view my work in a professional and easy-to-navigate manner.",
                  site: "",
                  github: "",
                  bgImage: bgImagetwo,
                })
              }
            >
              Portfolio
            </motion.h3>

            <motion.h3
              className="mt-9 py-6 transition-all duration-200 cursor-pointer font-bold text-black"
              whileHover={{ color: "white" }}
              onClick={() =>
                setChange({
                  title: "Top Crypto",
                  story:
                    "This website provides users with up-to-date information on the cryptocurrency market, including prices, charts, and trends. It is built with React, Coingecko API, and MUI and is easy to use, providing real-time updates. It is a great resource for those interested in cryptocurrency trading.",
                  feature: "",
                  site: "https://topcrypto-b8b58.web.app/",
                  github: "https://github.com/bren-pun/bren-pun-Crypto-Website",
                  bgImage: bgImagethree,
                })
              }
            >
              Top Crypto
            </motion.h3>
            <motion.h3
              className="mt-9 py-6 transition-all duration-200 cursor-pointer font-bold text-black"
              whileHover={{ color: "white" }}
              onClick={() =>
                setChange({
                  title: "Novela",
                  story:
                    "Novela is an online platform that aims to make literature more accessible by providing readers with a comprehensive view of the best books in all genres and languages. It offers personalized recommendations, the ability to explore books by authors, themes, and topics, and a platform for readers to rate, review, and discuss the books they read.",
                  feature: "comming soon...",
                  site: "",
                  github: "",
                  bgImage: bgImagefour,
                })
              }
            >
              Novela
            </motion.h3>
          </Fade>
        </div>
      </div>
      <div className="bg-whiterist relative w-full h-auto p-8 sm:p-16 text-white flex flex-col sm:flex-row items-center transition-all ">
        <Cards
          title={change?.title}
          story={change?.story}
          feature={change?.feature}
          site={change?.site}
          github={change?.github}
          bgImage={change?.bgImage}
          data={data}
        />
      </div>
    </div>
  );
};

export default Work;
