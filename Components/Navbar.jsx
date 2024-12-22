import React, { useEffect, useState } from "react";
import ibrahim from "../src/Images/IBRAHIM.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle the nav
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(!isNavOpen)
    }
  };

  


  const tl=gsap.timeline()

  useGSAP(() => {

    tl.to(".loader",{
      height:0,
      duration:1,
      delay:0.8,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      backgroundColor:"#F5E4BC"
    })

    tl.from(".nav-items .menu",{
      y:-40,
      opacity:0,
      duration:0.6,
      delay:0.3
    })

    tl.from("#logo", {
      y: -40,
      opacity:0,
      duration: 1,
      ease: "power2.out",
      
    },"+=0.");

    tl.from("#name span",{
      y:100,
      opacity:0,
      duration:0.6,
      stagger:0.1
    })
  });

  const toggleNav=()=>{
setIsNavOpen(!isNavOpen) 
 }
 
  return (
    <>
      {/* Navbar */}

      <div className="loader overflow-x-hidden fixed top-0 left-0 w-screen bg-black h-screen z-[999999]"></div>
      <nav
        id="nav"
        className="w-full  overflow-hidden z-10 h-[100px]  flex items-center  justify-between shadow-lg"
      >
        <div className="nav-left">
          <img
            id="logo"
            className="w-[300px]  object-cover h-[100%]"
            src={ibrahim}
            alt="Ibrahim Logo"
          />
        </div>
        <div onClick={toggleNav} className="nav-items text-3xl font-[8rem] cursor-pointer mr-20">
       {isNavOpen?<RxCross1 onClick={toggleNav}/>: <CiMenuFries className="menu" />}
        </div>
      </nav>

    <div className="relative ">
    <div
  className={`big-nav flex items-center backdrop-blur-3xl transform ${
    isNavOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-500 ease-in-out z-[99999] font-zentry cursor-pointer absolute right-0 h-[100vh] top-0 px-[10px] py-[0rem] flex flex-col gap-9 text-4xl bg-[#F5E4BC] w-[37vw]`}
>
  <h3 className="hover:underline animate-bounce" onClick={()=>handleScroll("home")}>Home</h3>
  <h3 className="hover:underline animate-bounce" onClick={()=>handleScroll("about")}>About</h3>
  <h3 className="hover:underline animate-bounce" onClick={()=>handleScroll("projects")}>Projects</h3>
  <h3 className="hover:underline animate-bounce" onClick={()=>handleScroll("Services")}>Services</h3>
  <h3 className="hover:underline animate-bounce" onClick={()=>handleScroll("about")}>Contact</h3>
  
</div>
    </div>

     


      
      
    </>
  );
};

export default Navbar;
