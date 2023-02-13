import {
  Check,
  ContentCopy,
  GitHub,
  KeyboardArrowRight,
  LibraryAddCheck,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Fade } from "react-reveal";

const Contact = () => {
  const [confirm, setConfirm] = useState(false);
  function emailClick() {
    navigator.clipboard.writeText("punzalanbren@gmail.com");
    setConfirm(true);
  }
  return (
    <div
      className="h-full w-full bg-whiters flex flex-col  sm:mt-0 items-center justify-center  relative"
      id="CONTACT"
    >
      <Fade bottom duratiom={2000}>
        <h1 className="text-4xl sm:text-9xl font-bold text-white mt-9 sm:mt-16 hover:text-stone-200 transition-all">
          Contact
        </h1>
        <h3 className=" text-3xl sm:text-7xl text-black font-semibold mt-3 hover:text-green-200 transition-all">
          Get In Touch
        </h3>
      </Fade>
      <Fade bottom duratiom={4000}>
        <p className="text-center text-white text-1xl sm:text-3xl mt-6 hover:text-stone-200 transition-all">
          I'm always looking for ideal opportunities to meet new people.
          <br /> Whether you have an idea or a question, you can reach out to me
          on my socials!
        </p>
      </Fade>
      <Fade bottom duratiom={5000}>
        <span
          role="button"
          className="cursor-pointer px-1 sm:px-10 py-1 sm:py-5 bg-whiter hover:bg-slate-700 rounded-xl text-black text-1xl sm:text-4xl mt-6"
          onClick={emailClick}
          title="Copy Me!"
        >
          <KeyboardArrowRight
            sx={{
              color: "white",
              width: { xs: "15px", sm: "25px", lg: "30px" },
            }}
          />
          punzalanbren@gmail.com{" "}
          {confirm ? (
            <LibraryAddCheck
              fontSize="large"
              sx={{
                color: "white",
                width: { xs: "15px", sm: "25px", lg: "30px" },
              }}
            />
          ) : (
            <ContentCopy
              fontSize="large"
              sx={{
                color: "white",
                width: { xs: "15px", sm: "25px", lg: "30px" },
              }}
            />
          )}
        </span>
      </Fade>
      <Fade bottom duratiom={6000}>
        <div className="flex flex-row gap-3 mt-6">
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/bren-punzalan/")
            }
          >
            <LinkedIn
              fontSize="large"
              sx={{
                color: "white",
                "&:hover": { color: "#8AEDA3" },
                transition: "all 0.7s",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://github.com/bren-pun")}
          >
            <GitHub
              fontSize="large"
              sx={{
                color: "white",
                "&:hover": { color: "#8AEDA3" },
                transition: "all 0.7s",
              }}
            />
          </IconButton>
          <IconButton onClick={() => window.open("https://twitter.com/BRP_5")}>
            <Twitter
              fontSize="large"
              sx={{
                color: "white",
                "&:hover": { color: "#8AEDA3" },
                transition: "all 0.7s",
              }}
            />
          </IconButton>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
