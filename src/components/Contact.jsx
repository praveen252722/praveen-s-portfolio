import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className=" card4" id="contact">
      <h3 className="card-title">Contact Me</h3>
      <div className="contact-container">
        <div className="social">
          <h4 className="title-0">Email</h4>
          <p className="sl3">
            <a href="mailto:praveentalluri25@gmail.com">
              praveentalluri25@gmail.com
            </a>
          </p>
        </div>

        <div className="social">
          <h4 className="title-0">Phone</h4>
          <p className="sl3">+91 8341864446</p>
        </div>

        <div className="social">
          <h4 className="title-0">Social</h4>
          <p className="sl3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
