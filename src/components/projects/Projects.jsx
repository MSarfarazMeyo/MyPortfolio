import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/bunnys.jpg"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>3D Bunny</h3>

          <div className="features">
            <ul>
              <li> Converted Figma design to React Js Application</li>
            </ul>
          </div>

          {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 , CSS3 , ReactJS , MaterialUi</p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://bunnypunks1.vercel.app/">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/MSarfarazMeyo/3D-bunny-new3"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/whatsforlounch.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>WhatsForLounch Stake</h3>
          <p>A full stack staking site</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Login / Signup</li>
              <li>Create your own staking Site</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>
            HTML5 . CSS3 . Javascript(ES6) . React . Redux . Mongoose . Express{" "}
          </p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://mfrontend-msarfarazmeyo.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/MSarfarazMeyo/mfrontend"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/et.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Expense Tracker</h3>
          <p>A Full stack Expense Tracking App</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Ligin / Signup</li>
              <li>Expense Tracking</li>
              <li>Income Tracking</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JavaScript . MongoDb . Mongoose . Express</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://expense-tracker-app-q4pk.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/MSarfarazMeyo/ExpenseTrackerApp.git"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/indeed1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Indeed(clone)</h3>
          <p>
            A clone of online Job search platform which provides a number of job opportunities for the jobseekers.
          </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div> */}
    </div>
  );
}
