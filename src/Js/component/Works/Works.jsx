import React, { useContext } from "react";
import "../../../css/component/Works/Works.css";
import {Link} from 'react-scroll'
import SkillCard from "./SkillCard";
import { themeContext } from "../../../Context";
import { Zoom } from "react-awesome-reveal";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="main_div" id="works">
      <Zoom>
       <span style={{ color: darkMode ? "white" : "" }} className='heading'>
          My <span className="skills">Technical </span> Skills
          </span>
          </Zoom>

   <Zoom>
    <div className="works" >
        <SkillCard/>
      </div>
   </Zoom>
    
    </div>
  );
};

export default Works;