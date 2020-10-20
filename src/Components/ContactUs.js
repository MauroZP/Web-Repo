import React,{useState} from "react";
import "../styles/ContactUs.css";
import * as ReactBootStrap from "react-bootstrap";
import logoSample2 from "../logoSample2.png";

export default function ContactUs() {

  const [navbar, setNavbar] = useState(false);

  const changeBGNavbar = () => {
    if(window.scrollY >= 100){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBGNavbar);

  return (
    <ReactBootStrap.Navbar className={navbar ? 'contact-us active' : 'contact-us'} variant="dark" sticky="top">
        <img
          alt=""
          src={logoSample2}
          width="100"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      <ReactBootStrap.Nav className="ml-auto" >
        <a 
          className={navbar ? 'TextContanct active' : 'TextContanct'} href="#ContactUs" target="_blank">
          Contact Us
        </a>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar>
  );
}