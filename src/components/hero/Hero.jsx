import React from "react";
import "./hero.scss";
import img from "./undraw_developer_activity_re_39tg.svg";
const Hero = () => {
  return (
    <>
      <section className="container ">
        <div className="left_section">
          <h2>Hello,</h2>
          <h1> I'm Sudhanshu</h1>
          <span>A Frontend Developer & Design Enthusiast</span>
          {/* <p>
            I design and code beautifully simple things, and I love what I do.
          </p> */}
          <div>
            <button className="btn">Contact me</button>
          </div>
        </div>
        <div className="right_section">
          <img src={img} alt="" className="img" />
        </div>
      </section>
    </>
  );
};

export default Hero;
