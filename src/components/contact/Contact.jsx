import React from "react";
import "./contact.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
          <div className="parag">
            <h2>Just say Hi</h2>
            <p>I'M ALWAYS OPEN TO DISCUSS</p>

            <p>LET'T GET IN TOUCH .</p>

            <div className="contact_icon">
              <div className="call">
                <div>Call me at:</div>
                <p>+92 309 9789757</p>
              </div>
              <div className="call">
                <div>Mail me at:</div>
                <p>msarfaraz.meyo@gmail.com</p>
              </div>
            </div>
            <div className="icoL">
              <div className="icoL_icon">
                <a href="mailto:msarfaraz.meyo@gmail.com">
                  <EmailIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div className="icoL_icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/muhammad-sarfaraz-2b2788250/"
                >
                  <LinkedInIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div className="icoL_icon">
                <a target="_blank" href="https://github.com/MSarfarazMeyo">
                  <GitHubIcon style={{ width: "60px", height: "45px" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="gif">
            <img src={"assets/email1.gif"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
