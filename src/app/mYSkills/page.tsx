import React from "react";
import "./mySkills.css";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5,FaCss3,FaReact,FaSass,FaGitAlt,FaGithub,FaBootstrap} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss,SiRedux } from "react-icons/si";

const MySkill: React.FC = () => {
  return (
    <div className="mySkill">
      <ul className="skills-list group ">
        <li className="skill">
         <FaHtml5/>
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
          <SiTypescript/>
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
          <SiTailwindcss/>
          <p>Tailwind-css</p>
        </li>
        <li className="skill">
<SiRedux/>
          <p>Redux</p>
        </li>
        <li className="skill">
        <FaGitAlt />
          <p>Git</p>
        </li>
        <li className="skill">
          <FaGithub/>
          <p>Github</p>
        </li>
      </ul>
      <div className="madeHome  mx-auto mt-3 pb-4">
        <a href="mailto:ahmedibrhiam512@gmail.com"></a>
        <a href="https://wa.me/01158031289"></a>
        <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220"></a>
        <a href="http://github.com/A7medIbra56"></a>
      </div>
    </div>
  );
};

export default MySkill;
