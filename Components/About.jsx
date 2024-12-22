import React from "react";
import Aboutimg from "../src/Images/About.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="About-container flex flex-col justify-center items-center w-full px-6 md:px-12 lg:px-20 py-10"
      >
        {/* About Title */}
        <div className="about-txt font-zentry overflow-hidden tracking-wider text-[2.5rem] mt-4 md:mt-6 lg:mt-8 md:text-[4rem] lg:text-[5rem]">
          <span className="inline-block">W</span>
          <span className="inline-block">h</span> 
          <span className="inline-block">o</span> &nbsp;
          <span className="inline-block">A</span>
          <span className="inline-block">m</span> &nbsp;
          <span className="inline-block">I</span> &nbsp;
          <span className="inline-block">?</span>

        </div>

        {/* About Content */}
        <div className="container mt-8 shadow-lg flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          {/* Text Section */}
          <div className="content text-base font-circular-web  md:text-lg lg:text-xl text-justify leading-7 md:leading-9 lg:leading-10 w-full md:w-1/2">
          A passionate Frontend Developer who loves crafting visually stunning and highly interactive websites. With skills in HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS, I transform ideas into seamless user experiences. I also bring websites to life with smooth animations using GSAP, adding a layer of creativity and dynamism to my projects.

Whether it’s building responsive designs, optimizing performance, or making animations pop, I’m all about turning concepts into beautiful, functional realities. Let’s build something amazing together!
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-[80%] md:w-[90%] lg:w-[80%] object-contain"
              src={Aboutimg}
              alt="About Section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
