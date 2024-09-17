import React from "react";
import "./Contact.css";
import MySocials from "../MySocials";

function Contact(props) {
  return (
    <>
      <div className="paper-container">
        <div className="paper-header">
          <div className="page-title">CONTACT</div>
          <div className="child contact-description">
            PLACES WHERE YOU CAN REACT OUT TO ME
          </div>
        </div>
        <hr className="contact-border" />
        <div className="paper-footer">
          <div className="socials">
            <MySocials />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
