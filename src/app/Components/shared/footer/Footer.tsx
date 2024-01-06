"use client"
import React, { useState } from "react";
import "./Footer.css";
import { FaGoogle, FaLinkedin, FaGithub, FaWhatsapp, FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  const [show, setShow] = useState<string | null>(null);
  const [btn1, setBtn1] = useState<string | null>(null);
  const [btn2, setBtn2] = useState<string>("d-none");

  function WorkBtn1() {
    setShow("d-block");
    setBtn1("d-none");
    setBtn2("d-block");
  }

  function WorkBtn2() {
    setShow("d-none");
    setBtn1("d-block");
    setBtn2("d-none");
  }

  return (
    <div className="container footer position-fixed w-25">
      <div className="col-md-12 main ">
        <header>
          <div className="mt-5 d-flex justify-content-center align-items-center">
            <img src={`./img/ahmed2.png`} className="w-50 rounded-2" alt="..." />
            <h2>AHMED IBRAHIM</h2>
          </div>
        </header>
      </div>
      {/* btn Show */}
      <div className={`down text-center mt-3 ${btn1}`}>
        <a
          href="#aboutme"
          onClick={() => {
            WorkBtn1();
          }}
        >
          <i className="fa fa-angle-double-down"></i>
          <br />
          Show Details
        </a>
      </div>
      {/* btn hide */}
      <div className={`down text-center mt-3 ${btn2}`}>
        <a
          href="#aboutme"
          onClick={() => {
            WorkBtn2();
          }}
        >
          <i className={`fa fa-angle-double-up`}></i>
          <br />
          Hide Details
        </a>
      </div>
      <div id="#aboutme" className={`ShowHide ${show}`}>
        <div className="front">
          <h3>FRONT END DEVELOPER</h3>
        </div>
        <div className={`smallScr `}>
          <div className="made">
            <div className="madeItem d-flex">
              <div className={'madeFa'}>
                <FaLocationArrow/>
              </div>
              <div>
                <a href="tel:#">
                  <h6 className="p-2">Cairo, Egypt</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div className={'madeFa'}>
                <FaGoogle/>
              </div>
              <div>
                <a href="mailto:ahmedibrhiam512@gmail.com">
                  <h6 className="p-2">ahmedibrhiam512@gmail.com</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div className={'madeFa'}>
                <FaLinkedin/>
              </div>
              <div>
                <a href="linkedin.com/in/ahmed-ibrahim-🇵🇸-18ab26220">
                  <h6 className="p-2">Ahmed Ibrahim</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div className={'madeFa'}>
                <FaWhatsapp />
              </div>
              <div>
                <a href="tel:01158031289">
                  <h6 className="p-2">+201158031289</h6>
                </a>
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
      </div>
    </div>
  );
}
