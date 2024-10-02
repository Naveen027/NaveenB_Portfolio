import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Services from "./Components/Services.js";
import Contacts from "./Components/Contacts.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import LoadingScreen from "./Components/LoadingScreen.js"; 

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowHome(true);
      }, 0.500);

      return () => clearTimeout(timer); 
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onLoaded={() => setIsLoaded(true)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* Only render the Home component after 3 seconds */}
            {showHome && <Route path="/NaveenB_Portfolio/home" element={<Home />} />}
            <Route path="/NaveenB_Portfolio/about" element={<About />} />
            <Route path="/NaveenB_Portfolio/services" element={<Services />} />
            <Route path="/NaveenB_Portfolio/projects" element={<Projects />} />
            <Route path="/NaveenB_Portfolio/contact" element={<Contacts />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
