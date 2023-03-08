import React from "react";
import "./work.css";
import { Link } from "react-router-dom";

function work() {
  return (
    <section class="about">
      <h3 id="myWork">My Work</h3>

      <h4 id="item1">
        <Link to="https://pipoxy.github.io/week1Challenge/" target="_blank">
          Week 1 Challenge
        </Link>
      </h4>

      <div class="secondProjects">
        <h4>
          <p>Project 2</p>
        </h4>
        <h4>
          <p>Project 3</p>
        </h4>
      </div>
    </section>
  );
}

export default work;
