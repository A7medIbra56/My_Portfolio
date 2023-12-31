import React from "react";
import "./Home.css";

const MyPortfolio: React.FC = () => {
  return (
    <>
      <div className=" home container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="mx-auto p-5">
              <h2 className="pt-3">welcome,</h2>
              <h2 className="pt-1">My Name Ahmed Ibrahim</h2>
              <h4 className="pt-5">
                I front-end Developer who designs and develops responsive
                websites. My expertise is to create and design websites.
              </h4>
              <div className="cv">
                <a
                  href="https://drive.google.com/drive/u/0/folders/13ZkXiCPfqDm9G6f49D1UU7uPMXEz0UvX"
                  download="Ahmed Ibrahim-cv.pdf"
                >
                  <button className="download-button">
                    Download CV<i className="fa-solid fa-turn-down ms-2"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <img src={`./img/Picsart.jpg`} className="" alt=".." />
        </div>
        </div>
        
      </div>
      <div className="wrapper">
        <ul>
          <li className="github">
            <a href="http://github.com/A7medIbra56">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="linkedin">
            <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220">
              <i className="fa-brands fa-linkedin " aria-hidden="true"></i>
            </a>
          </li>
          <li className="google">
            <a href="mailto:ahmedibrhiam512@gmail.com">
              <i className="fa-brands fa-google " aria-hidden="true"></i>
            </a>
          </li>
          <li className="whatsapp">
            <a href="https://wa.me/01158031289">
              <i className="fa-brands fa-whatsapp " aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyPortfolio;
