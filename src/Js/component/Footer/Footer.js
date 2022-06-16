import React from "react";
import "../../../css/component/Footer/Footer.css";
import Wave2 from "../../../Media/wave2.bf5c2da41eadeb1dea2a.png";
import linkedin from '../../../Media/linkedin.6892b3ae328c7a1e055f.png'
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave2} alt="" style={{ width: "100%", height:"300px" }} className='wave'/>
      <div className="f-content">
        <span>Designed and build by Yash Tomar, 2022 All rights reserved.</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
      


        </div>
      </div>
    </div>
  );
};

export default Footer;
