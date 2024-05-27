import React from "react";
import "./footer.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>

     <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#cacaca",
          textAlign: "center",
          backgroundColor: "#292929",
          paddingTop:"1rem",
        }}
      >
        Lets Talk
      </h1>
      <div className="footer_container" id="contact">
     
        <form className="form">
          <h2 style={{ color: "#3b82f6" }}> Send a Message</h2>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <textarea name="" id="" rows="6" placeholder="Message"></textarea>
          </div>
          <button className="btn">Submit</button>
        </form>
        <div className="links">
          <div>
          <h2 style={{ color: "#3b82f6" }}> Get In Touch</h2>
          </div>
          <div>
          <h3 >
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from you. Simply
            fill the from and send me an email.
          </h3>
          </div>
          <div className="card">
            <CiLocationOn id="CiLocationOn"/>
            <h3>Gurugram India</h3>
          </div>
          <div className="card">
          <IoCallSharp id="IoCallSharp"/>
            <h3>sudoofe123@gmail.com</h3>
          </div>
          <div className="card">
            <MdOutlineEmail id="MdOutlineEmail"/>
            <h3>8935996175</h3>
          </div>
          <div className="social-icons">
          <BsGithub className="bs" />
          <BsLinkedin className="bs" />
          <AiOutlineCodeSandbox className="bs" />
          </div>
        </div>
      </div>
      <div style={{ position: "relative" ,backgroundColor:"#292929"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3B82F6"
            fill-opacity="1"
            d="M0,32L34.3,37.3C68.6,43,137,53,206,69.3C274.3,85,343,107,411,122.7C480,139,549,149,617,133.3C685.7,117,754,75,823,58.7C891.4,43,960,53,1029,58.7C1097.1,64,1166,64,1234,80C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
     
      </div>
    </div>
  );
};

export default Footer;
