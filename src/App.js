import Navbar from "./Js/component/Navbar/Navbar";
import Intro from "./Js/component/Intro/Intro";
import Services from "./Js/component/Services/Services";
import "./App.css";
import Experience from "./Js/component/Experience/Experience";
import Works from "./Js/component/Works/Works";
import Portfolio from "./Js/component/Portfolio/Portfolio";
//import Testimonial from "./Js/components/Testimonials/Testimonial";
import Contact from "./Js/component/Contact/Contact";
import Footer from "./Js/component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "", }}
    >

      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <Works />
      <Contact />
      <Footer />
 
    </div>
  );
}

export default App;
