import React from "react";
import "./App.css";
import Text from "./components/Text";
import Logo from "./components/Logo";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <ContactUs />
        
        <div class="container">
          <Text />
          <Logo />
        </div>
      </header>
    </div>
  );
}

export default App;
