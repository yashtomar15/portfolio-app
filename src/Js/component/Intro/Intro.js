import React, { useContext } from "react";
import "../../../css/component/Intro/Intro.css";
import me from "../../../Media/yash-image.jpg";
import Github from "../../../Media/github.a855c3975c028d8069f5.png";
import LinkedIn from "../../../Media/linkedin.6892b3ae328c7a1e055f.png";
import Instagram from "../../../Media/Instagram-Icon.png";
import { themeContext } from "../../../Context";
import Resume from '../../../Media/resume.pdf';
import { Typewriter } from "react-simple-typewriter"
import {Zoom,Fade,Flip,Roll} from 'react-awesome-reveal';
import styles from '../../../css/component/Intro/intro.module.css';
//import SmoothList from 'react-smooth-list';

const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    // <SmoothList transitionDuration={2500} animated={true}>
    <div className="Intro" id="intro" style={{alignItems:'center'}}>
     <Zoom>
      <div className="i-left">
        <div className="i-name ">
          <span style={{ color: darkMode ? "white" : "" }}>
            <div >
              <p style={{fontSize:'27px',
              fontFamily:"Ubuntu,'sansserif'",
              lineHeight:'41px'}}>Hello, my name is</p>
            </div>

          </span>

          <span className="animate-charcter name">Yash Tomar</span>
          <h2 className="full_stack_h2">
            I'm a
            <span className="full_stack" style={{marginLeft:'10px'}}>
               Full Stack Developer.
              {/* <Typewriter words={[" Full Stack Developer.", " MERN Stack Developer."," FrontEnd Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
            </span>
          </h2>
        </div>

        {/* <a href="#"  target={"_blank"} className="resum">
          <button className="resume">Resume</button>
        </a> */}

        <div className="i-icons">
          <a href="https://github.com/yashtomar15" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.instagram.com/yashxdev/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="linkdin" />
          </a>
        </div>
      </div>
      </Zoom>
    
      <div className="i-right" style={{}}>
        <Zoom>
        <img src={me} alt="me" className="my_img" />
        </Zoom>
      </div>
    </div>
    // </SmoothList>
  );
};

export default Intro;
