import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <p>forextradersaworld@protonmail.com</p>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} url="https://www.instagram.com/_._nathan_._/tagged/"/>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
