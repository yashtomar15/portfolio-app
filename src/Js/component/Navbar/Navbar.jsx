// import React, { useContext } from "react";
import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "../../../css/component/Navbar/Navbar.css";
import { Link } from "react-scroll";
  // import D1 from 'https://previews.123rf.com/images/arbuzu/arbuzu1506/arbuzu150600105/40913683-letter-r-logo-icon-design-template-elements.jpg'

import { themeContext } from "../../../Context";
import { GoThreeBars } from 'react-icons/go';
import { RiCloseCircleFill } from 'react-icons/ri';




const Navbar = () => {

  const [nav, setNav]= React.useState(false)


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // style={{ color: darkMode ? "white" : "" }}

  return (
    <div className="Nav-main" style={{ color: darkMode ? "white" : "" }}>

      <div className="n-wrapper" id="Navbar" style={{ color: darkMode ? "white" : "" , backgroundColor: darkMode ? "#0f1624" : "white" }}>
        <div className="n-left" style={{color: darkMode ? "white" : "", backgroundColor: darkMode ? "#0f1624" : "white" }}>
        <Link to="intro" spy={true} smooth={true} className='list'>
          {/* <img src={D1} alt="d" className="n-name" /> */}
          <h5 style={{color:darkMode ? "white":"black",marginLeft:"20px" ,fontSize:"25px"}}><span style={{color:'red'}}>Y</span>ash <span style={{color:'red'}}>T</span>omar</h5>
          </Link>
          <Toggle className='toggle' />
 
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} activeclass="active">
              <li>
                <Link to="intro" spy={true} smooth={true} className='list' style={{color:darkMode ? "white" : "#242d49" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} className='list' style={{color:darkMode ? "white" : "#242d49" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true} className='list' style={{color:darkMode ? "white" : "#242d49" }}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} className='list' style={{color:darkMode ? "white" : "#242d49" }}>
                  Skills
                </Link>
              </li>
              {/* <li>
              <Link to="testimonial" spy={true} smooth={true} className='list'>
                Blogs
              </Link>
            </li> */}
              <li>
                <Link to="contact" spy={true} smooth={true} className='list' style={{color:darkMode ? "white" : "#242d49" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>



{/* <div className="hide_menu">

  <GoThreeBars onClick={()=>{setNav(!nav)
  // console.log(nav)
}  
} style={{transition:"2s", cursor:"pointer"}}/>

</div> */}

  <ul className={!nav ? "new_hide" : "Show_li"} >
  <RiCloseCircleFill onClick={()=>{setNav(!nav)
  // console.log(nav)
}  
} style={{marginLeft:"0px", cursor:"pointer"}}/>
<h5 className="hide_name">Rahul</h5>
              {/* <li>
                <Link activeClass="active" to="intro" spy={true} smooth={true} className='list'>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} className='list'>
                  About
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} className='list' >
                  Skills
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true} className='list'>
                  Projects
                </Link>
              </li>
              {/* <li>
              <Link to="testimonial" spy={true} smooth={true} className='list'>
                Blogs
              </Link>
            </li> */}
              {/* <li>
                <Link to="contact" spy={true} smooth={true} className='list'>
                  Contact
                </Link>
              </li> */}
            </ul> 
            




          
          {/* <Link to="contact" spy={true} smooth={true}>
        <p className="button n-button">Contact</p>
        </Link> */}
        </div>
      </div>



    </div>
  );
};

export default Navbar;
