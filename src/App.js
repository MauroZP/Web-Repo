import React from "react";
import "./App.css";
import Text from "./Components/Text";
import Logo from "./Components/Logo";
import ContactUs from "./Components/ContactUs";

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
