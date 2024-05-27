import React, { useEffect } from "react";
import { useState } from "react";
import "./about.scss";
//import img from "./illus.svg";
// import img from "./sud.jpg.jfif";
import img from "./undraw_male_avatar_g98d.svg"
import { useSelector, useDispatch } from "react-redux";

const About = () => {
  const skillArr=["Html/css","scss","Javacript","Typescript","Reactjs","Reduxjs","Tailwind Css","Node js","Express js","C/C++/C#","Azure","SQL","Apex/carbon charts","Ui/ux Design"]


  return (
    <>
      <section
        className="about_container"
        id="about"
      >

        <div className="img_section" >
          <img src={img} alt=""  />
        </div>

        
 
        <div className="about_section ">
        <h2
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color:"#cacaca"
        }}
      >
        About Me
      </h2>  
      <span style={{textAlign:'center',border:"2px solid #3b82f6" }}></span>
          <p className="para">
            I am a Trainee Software Engineer with 1.2+ years of experience in
            front-end development, currently working
             <b> Milliman </b>  India. I have a proven track record of 
            delivering successful projects in a mnc environment. </p>
            <p className="para">
              My expertise in frontend technologies, such as JavaScript,
              ReactJS, Typescript, and Nodejs has helped me to create
              user-friendly and visually appealing software products.
            </p> 
            <p className="para">
            I have experience working in a fast-paced  environment and
            understand the importance of delivering high-quality products on
            tight deadlines. I am passionate
            about staying up-to-date with the latest front-end technologies and
            best practices, and I am always looking for ways to improve my
            skills and knowledge.
            </p>
          <div style={{ marginTop:"1rem", marginRight:"10px"}}>
      {skillArr.map((itm)=> {
          return (
            <>
          <span key={itm} className="span" >{itm}</span>
          </>
 ) })}
 </div>
          <div className="btn_container">
            {/* <button className="btns" onClick={handleClick}>
              Hire me
            </button> */}

            <button className="btns">Download CV</button>
          </div>
          {/* <h1>{account}</h1>
   <button onClick={()=>depositMoney(1000)}>Deposit</button>
    <button onClick={()=>withdrawMoney(100)}>withdraw</button> */}
   
        </div>

      
      </section>

      {/* <div class="containers">
  <div class="moving-text">HTML</div>
  <div class="moving-text">CSS</div>
  <div class="moving-text">JAVASCRIPT</div>
   <div class="moving-text">C++</div>
  <div class="moving-text">TYPESCRIPT</div>
  <div class="moving-text">REACT</div> 
  <div class="moving-text">SASS</div>
  <div class="moving-text">TAILWIND CSS</div>
  <div class="moving-text">GIT</div>
  <div class="moving-text">AZURE</div>
  <div class="moving-text">CARBON COMP.</div>
  <div class="moving-text">C#</div>

 
</div> */}
    </>
  );
};

export default About;
