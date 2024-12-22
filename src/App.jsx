import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import ProjectCard from "../Components/ProjectCard";
import Ecommerce from "../src/Images/Ecommerce.png"
import Youtube from "../src/Images/Youtube.png"
import Tictactoe from "../src/Images/Tictactoe.png"
import Countryapp from "../src/Images/Countryapp.png"
import ProjectHeading from "../Components/ProjectHeading";
import Services from "../Components/Services";
import { ContactMe } from "../Components/ContactMe";
function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <ProjectHeading/>
      <div className="flex justify-center items-center gap-11  flex-wrap">
      <ProjectCard
        image={Ecommerce}
        title="E-commerce App"
        description="Made with HTML, CSS, Javascript."
        liveLink="https://ibrahim-ecommerce-site.netlify.app/"
      />

<ProjectCard
        image={Youtube}
        title="A Youtube Clone"
        description="Made with React, Youtube API"
        liveLink="https://ibrahim-youtube-clone.netlify.app/"
      />

<ProjectCard
        image={Countryapp}
        title="A Country App"
        description="Made in React using Country-API ."
        liveLink="https://ibrahim-country-app.netlify.app/"
      />

<ProjectCard
        image={Tictactoe}
        title="Tic Tac Toe Game"
        description="Made in React."
        liveLink="https://ibrahim-tic-tac-toe-game.netlify.app/"
      />
      </div>

      <h1 id="Services" className="text-center font-zentry text-[5rem] mt-[80px] mb-14">Services</h1>

      <Services/>
      <h2 className="text-[5rem] text-center font-zentry">Contact Me</h2>

      <ContactMe/>
    
    </div>
  );
}

export default App;
