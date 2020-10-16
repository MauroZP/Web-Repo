import React from "react";
//import logo from "../logo.svg";
import lizzard from "../lizard.gif";
import "../styles/Logo.css";

export default function Logo() {
  return (
    <img
      class="one"
      src={lizzard}
      className="App-logo"
      alt="logo"
      style={{ alignSelf: "flex-right" }}
    />
  );
}
