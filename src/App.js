import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Services from "./Components/Services.js";
import Contacts from "./Components/Contacts.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import LoadingScreen from "./Components/LoadingScreen.js"; // Import the LoadingScreen component

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onLoaded={() => setIsLoaded(true)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
