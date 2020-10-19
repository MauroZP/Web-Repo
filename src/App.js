import React from "react";
import "./App.css";
import Text from "./components/Text";
import ContactUs from "./components/ContactUs";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ContactUs />
        <div class="container">
          <Text />
        </div> 
      </header>
      <div class="row">
        <div class="column">
          <Card/>
        </div>
        <div class="column">
          <Card/>
        </div>
        <div class="column">
          <Card/>
        </div>
        <div class="column">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
