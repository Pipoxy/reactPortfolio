import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link
        className="icons"
        to="https://www.linkedin.com/in/jake-parke-918217269/"
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>

      <Link className="icons" to="https://github.com/Pipoxy" target="_blank">
        <AiFillGithub />
      </Link>
    </footer>
  );
}

export default Footer;
