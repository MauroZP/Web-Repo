import React from "react";
import "./App.css";
import Text from "./components/Text";
import ContactUs from "./components/ContactUs";
import Cards from "./components/CardsItem";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactUs />
      </header>
      <div class="header">
        <div class="head">
          <Text />
        </div>
      </div>
      <Cards />
    </div>
  );
}

/*
      <div class="Row">
        <div class="ColumnLeft">
          <Card/>
        </div>
        <div class="ColumnLeft">
          <Card/>
        </div>
        <div class="ColumnRight">
          <Card/>
        </div>
        <div class="ColumnRight">
          <Card/>
        </div>
      */

export default App;
