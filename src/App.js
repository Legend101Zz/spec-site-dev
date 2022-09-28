import React from "react";
import "./App.css";
import Hero from "./components/UI/Hero";
import Navbar from "./components/UI/Navbar";
import About from "./Sections/about";
import Speakers from "./Sections/speakers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Speakers/>
    </div>
  );
}

export default App;
