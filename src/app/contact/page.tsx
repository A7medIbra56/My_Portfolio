import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div>
      <form>
        <input name="name" placeholder="What is your name?" className="name" />
        <input
          name="emailaddress"
          placeholder="What is your email?"
          className="email"
          type="email"
        />
        <textarea
          rows={4}
          cols={50}
          name="subject"
          placeholder="Please enter your message"
          className="message"
        ></textarea>
        <div className="send">
          <button
            type="submit"
            value="Send"
            className="btn btn-secondary btn-lg btn-block w-50"
          >
            Send
          </button>
        </div>
        <div className="madeHome  mx-auto mt-5">
          <a href="mailto:ahmedibrhiam512@gmail.com">
          
          </a>
          <a href="https://wa.me/01158031289">
          </a>
          <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220">
          </a>
          <a href="http://github.com/A7medIbra56">
          </a>
        </div>
      </form>
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

export default Contact;
