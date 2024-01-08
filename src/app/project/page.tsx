"use client";
import React from "react";
import "./Project.css";

const Project: React.FC = () => {
  return (
    <div>
      <div className="container cards position-relative">
        <div className="row services">
          <div className="col-md-4 col-12 content content-1 rounded-3 rounded-3">
            <button className="rounded-3">
              <img className="w-100" src="./PhotoPorject/1.png" alt="000" />
            </button>

            <h2>Noxe Movies</h2>
            <p>HTML,Bootstrap,React.js</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Noxe.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Noxe/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <button className="rounded-3">
              <img
                className="w-100"
                src="./PhotoPorject/Screenshot (10).png"
                alt="000"
              />
            </button>
            <h2>RAWG</h2>
            <p>HTML,css,javascript,react.js</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/rawg.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://rawg-three.vercel.app/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>Crud-system-2</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Crud-system-2.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Crud-system-2/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>MOVIES-Api</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/MoviseApi.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/MoviseApi/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>BookMarker</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/BookMarker.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/BookMarker/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>Simone</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Simone.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Simone/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
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
    </div>
  );
};

export default Project;

