import React, { useContext } from "react";
import "../../../css/component/Contact/contact.css";

import { themeContext } from "../../../Context";
import contact from '../../../Media/contact.ec03def613ffe59fb4ce334fcc107c2e.svg'

import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail}  from 'react-icons/hi';
import { BsGithub } from "react-icons/bs";
import { useForm, ValidationError } from '@formspree/react';
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  


  const [state, handleSubmit] = useForm("xwkyadvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  
  return (
    <div className="contact_main" style={{ color: darkMode ? 'white' : '' }} id="contact">
<Zoom>
      <div className="heding_cont">
      <span style={{ color: darkMode ? 'white' : '' }} className='get_touch'>Get in Touch
        <span className="contact"> Contact </span> me</span>
      </div>
  </Zoom>
  <Zoom>
  <div className="contact_flex">



<img src={contact} alt="msg" className="massge_img" />

<div className="contact-form" >

<div className="c-right">
  
  <div className="up_cont">
    <BsFillTelephoneFill />
    <p>+91 6395320028</p>
  </div>
  <div>
  <a href="mailto:tomaryash15@gmail.com"><HiOutlineMail className="md" /></a> 
    <p>tomaryash15@gmail.com</p>
  </div>
    <div>
    <a href="https://github.com/yashtomar15" style={{color:'black'}} ><BsGithub/></a>
    </div>






  <div className="con_img">
    {/* <a href='https://www.linkedin.com/in/yashtomar15/'
     target="_blank" rel="noopener noreferrer" className="linkdin">
      <BsLinkedin/>
      <p>Instagram</p>
    </a> */}
    <a href='https://github.com/yashtomar15' target="_blank" rel="noopener noreferrer" className="git_con">

      <BsGithub/>
      <p>GitHub</p>
    </a>
    <a href='mailto:tomaryash15@gmail.com' target="_blank" rel="noopener noreferrer" className="git_con gmail">
      <CgMail/>
      <p>Gmail</p>
    </a>

  </div>

 

  <div
    className="blur c-blur1"
    style={{ background: "var(--purple)" }}
  ></div>

  <ContactForm />
</div>
</div>

</div>
  </Zoom>
    </div>
  );
};

export default Contact;





export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkyadvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
     

      <input
        id="email"
        type="email"
        name="email"
        className="user"
        placeholder="Email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}

      />
      <textarea
        id="message"
        name="message"
        className="user"
        placeholder="Messages"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="button_su">
        Submit
      </button>
    </form>
  );
}


