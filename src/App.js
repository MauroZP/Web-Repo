import React from "react";
import "./App.css";
import Text from "./components/Text";
import ContactUs from "./components/ContactUs";
import Cards from "./components/CardsItem";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <ContactUs />
      <header className="App-header">
        <div class="head">
          <Text />
        </div> 
      </header>
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
      </div>
      */

export default App;
