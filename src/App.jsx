import React from "react";
import Navbar from "./components/Navbar.jsx";
import Info from "./components/Info.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Welcome title below header */}
      <div className="welcome">
        <h3>Welcome to my portfolio</h3>
      </div>

      <div className="card-container">
        <section id="home" className="section">
          <Info />
        </section>

        <section id="about" className="section">
          <AboutMe />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="certificates" className="section">
          <Certificates />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
