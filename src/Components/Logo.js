import React from "react";
import "../styles/Logo.css";
import videoBG from "../videoCapy.mp4";

export default function Logo() {
  return (
    <div>    
      <video class="one" autoPlay loop muted>
        <source src={videoBG} type="video/mp4"></source>
      </video>
    </div>
  );
}
