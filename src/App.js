import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//import Components
import Header from "./components/Header";
import Slider from "./components/Slider";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Main />
    </Router>
  );
}

export default App;
