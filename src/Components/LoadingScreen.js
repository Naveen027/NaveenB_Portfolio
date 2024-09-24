import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 4000); // 4 seconds for the fading effect

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${loading ? 'fade-in' : 'fade-out'}`}>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
};

export default LoadingScreen;
