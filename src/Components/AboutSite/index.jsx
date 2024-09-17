import React from "react";
import "./AboutSite.css";
import { Link } from "react-router-dom";

const AboutSite = () => {
  return (
    <div className="about-site-container">
      <div className="about-site-header ">
        <div className="page-title">ABOUT THIS SITE</div>
        <div className="about-site-description">
          A BEAUTIFUL, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH
          MODERN JAVASCRIPT AND HOSTED OVER THE GITHUB PAGES
        </div>
      </div>

      <hr className="about-site-border" />
      <div className="about-site-content">Welcome to my Portfolio!</div>
      <div className="about-site-content">
        Thank you for stopping by! 🙏 Feel free to explore and learn more {""}
        <Link className="customized-link" to={"/about"}>
          about my background
        </Link>
        , discover {""}
        <Link className="customized-link" to="/resume">
          what I bring to the table
        </Link>{" "}
        🧾, check out the projects {""}
        {/* <Link className="customized-link" to={"/projects"}> */}
        I've worked on {""}
        {/* </Link>{" "} */}
        👷‍♂️ , or dive into the{" "}
        <Link className="customized-link" to={"/stats"}>
          site statistics
        </Link>{" "}
        🧮. If you have any questions, want to chat about a potential
        collaboration, or just catch up over a coffee, {""}
        <Link className="customized-link" to={"/contact"}>
          don’t hesitate to reach out
        </Link>{" "}
        ✍.
      </div>
    </div>
  );
};

export default AboutSite;
