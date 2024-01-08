import React from "react";
import "./mySkills.css";
import { TbBrandJavascript } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const MySkill: React.FC = () => {
  return (
    <>
      <div className="mySkill">
        <ul className="skills-list group ">
          <li className="skill">
            <FaHtml5 />
            <p>HTML</p>
          </li>
          <li className="skill">
            <FaCss3 />
            <p>Css3</p>
          </li>
          <li className="skill">
            <TbBrandJavascript />
            <p>Javascript</p>
          </li>
          <li className="skill">
            <SiTypescript />
            <p>Typescript</p>
          </li>
          <li className="skill">
            <FaSass />
            <p>Sass</p>
          </li>
          <li className="skill">
            <FaReact />
            <p>React.Js</p>
          </li>
          <li className="skill">
            <FaBootstrap />
            <p>Bootstrap</p>
          </li>
          <li className="skill">
            <SiTailwindcss />
            <p>Tailwind-css</p>
          </li>
          <li className="skill">
            <SiRedux />
            <p>Redux</p>
          </li>
          <li className="skill">
            <FaGitAlt />
            <p>Git</p>
          </li>
          <li className="skill">
            <FaGithub />
            <p>Github</p>
          </li>
        </ul>
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

export default MySkill;
