import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Navbar from "./components/UI/Navbar";
import About from "./Sections/about";
import Prizes from "./Sections/prizes";
import Sponsers from "./Sections/sponsers";
import Milestones from "./Sections/milestones";
import Faq from "./Sections/faq";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <Milestones />
      <Prizes />
      <Faq />
      <Sponsers />

      <Footer />
    </div>
  );
}

export default App;
