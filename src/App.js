import React from "react";
import "./App.css";
import Text from "./components/Text";
import ContactUs from "./components/ContactUs";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
    <ContactUs />
      <header className="App-header">
        <div class="container">
          <Text />
        </div> 
      </header>
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
    </div>
  );
}

export default App;
