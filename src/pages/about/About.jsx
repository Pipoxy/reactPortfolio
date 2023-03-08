import React from "react";
import PFP from "../../assets/newNoPro.png";
import "./about.css";

function about() {
  return (
    <section className="about">
      <h3>About Me</h3>

      <div className="workItems">
        <section id="profilePicture">
          <img className="pfp" src={PFP} alt="profile" />
          <p className="intro">
            My name is Jake Parke, I'm an aspiring junior full stack developer
            and I love coding so much! I graduated highschool in 2018 andI
            started a coding bootcamp at the University of Utah. Coding been an
            amazing expierience. I've learned so many things from basic html to
            making react apps! The portfolio you're looking at is actually a
            react app!
          </p>
        </section>
      </div>
    </section>
  );
}

export default about;
