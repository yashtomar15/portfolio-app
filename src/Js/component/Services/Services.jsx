import React, { useContext } from "react";
import {Reveal}  from "react-reveal/Reveal";
import "../../../css/component/Services/Services.css";
import { themeContext } from "../../../Context";
import Svg1 from "./Svg";
// import Resume from './resume.pdf';
import { Zoom } from "react-awesome-reveal";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 3,
  //   type: "spring",
  // };

  return (

    <div className="services" id="services">
      {/* <Reveal effect="fadeInUP">
      <h1>test</h1>
      </Reveal> */}
      <Zoom>
      <span style={{ color: darkMode ? "white" : "" }} className="about_me"> All <span className="me">About</span> Me</span>
      </Zoom>
      <Zoom>
      <div className="grid_about">
        <div className="awesome">
          <ul className='about_article'>
            <li>
              Hello! My name is Yash Tomar and I enjoy creating things that live on the internet.
            </li>
            <br />
            <li>I'm a passionate full stack Developer, with strong administrative and communication skills, good attention to
              detail and the ability to write efficient code using MERN Stack.</li>
            <br />
            <li>My interest in web development started when I was trying to edit things on the web,
              that taught me a lot about HTML & CSS.</li>
            <br />
            <li>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for
              discovering new things every day.</li>
            <br />
            <li>Fast Forwarding to today, I built numerous websites that live on the internet.
              It is always a exiting a enjoing process for me and i learnt a lot by building the projects.</li>
            <br />

          </ul>
{/*           
        <a href={Resume} download className="resum">
          <button className="resume">Resume</button>
        </a> */}

        </div>


        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}

<Zoom>
        <Svg1 className='svg' />
        </Zoom>
      </div>
      </Zoom>
    </div>
   
  );
};

export default Services;
