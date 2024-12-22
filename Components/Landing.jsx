import React from "react";
import html from "../src/Images/html.png";
import Css from "../src/Images/Css.png";
import Reactimg from "../src/Images/React.png";
import Tailwind from "../src/Images/Tailwind.svg";
import Js from "../src/Images/Js.png";
import Gsap from "../src/Images/Gsap.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import About from "./About";
gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  useGSAP(() => {
    gsap.from(
      ".tech-stack img",
      {
        y: 40,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      },
      "+=0.5"
    );

    gsap.from(".about-txt span",{
        y:30,
        opacity:0,
        duration:0.5,
        stagger:0.4,
        scrollTrigger:{
          trigger:".About-container",
          start:"top center",
        
        }
    })

    gsap.from(".content",{
      y:30,
      opacity:0,
      duration:0.2,
      stagger:0.01,
      scrollTrigger:{
        trigger:".About-container",
        start:"top center"
      }
  })
  });

  return (
    <div>
      {/* Landing Section */}
      <div id="home" className="landing  text-black font-zentry flex flex-col justify-center items-center w-full h-[65vh] z-[1] px-4">
        <div className="text-container text-center leading-tight md:leading-[5rem] lg:leading-[6.3rem] tracking-wide md:tracking-[4px] lg:tracking-[6px]">
          <p className="text-md md:text-lg text-slate-900">Hey there,</p>
          <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[6rem] flex flex-wrap gap-3 md:gap-6 font-bold justify-center items-center">
            I'm{" "}
            <div
              id="name"
              className="name-container  text-black overflow-hidden font-general"
            >
              <span className="inline-block">I</span>
              <span className="inline-block">B</span>
              <span className="inline-block">R</span>
              <span className="inline-block">A</span>
              <span className="inline-block">H</span>
              <span className="inline-block">I</span>
              <span className="inline-block">M</span>
            </div>
          </h1>
          <span className="block text-[2rem] md:text-[3rem] lg:text-[6rem] tracking-widest mt-4">
            A Front-End Developer
          </span>
          <p className="mt-4 mx-auto w-[4rem] md:w-[6rem] lg:w-[8rem] hover:w-[70rem] duration-500 cursor-pointer ease-in h-[9px] bg-black"></p>
        </div>
      </div>

      {/* Tech Stack Section */}

      <div className="tech-stack cursor-pointer   flex flex-wrap justify-evenly items-center gap-6 md:gap-8 lg:gap-10 rounded-xl px-4 py-8">
        <img
          className="w-[15vw]  md:w-[10vw] lg:w-[8vw] img"
          src={html}
          alt="HTML"
        />
        <img
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] img"
          src={Css}
          alt="CSS"
        />
        <img
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] img"
          src={Reactimg}
          alt="React"
        />
        <img
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] img"
          src={Tailwind}
          alt="Tailwind CSS"
        />
        <img
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] img"
          src={Js}
          alt="JavaScript"
        />
        <img
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] img"
          src={Gsap}
          alt="GSAP"
        />
      </div>

      <About/>
    </div>
  );
};

export default Landing;
