import React, { useState, useEffect } from 'react';
import './App.css';
import ValentinePage from './ValentinePage'; // Import the ValentinePage component
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Routes, Route } from 'react-router-dom';



function App() {
  const [butterflies, setButterflies] = useState(Array(5).fill(false)); // 5 butterflies
  const [positions, setPositions] = useState([]); // Random positions for butterflies
  const [redirectIndex, setRedirectIndex] = useState(0); // Random index for redirect
  const navigate = useNavigate(); // Use the navigate hook for navigation

  useEffect(() => {
    const newPositions = Array.from({ length: 5 }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
    }));
    setPositions(newPositions);
    setRedirectIndex(Math.floor(Math.random() * 5)); // Set redirect index on mount
  }, []);

  const handleButterflyClick = (index) => {
    if (index === redirectIndex) {
      // Redirect to the Valentine page
      navigate('/valentine'); // Ensure this matches your routing setup
    } else {
      // Mark only the clicked butterfly with red circle
      const newButterflies = [...butterflies];
      newButterflies[index] = true;
      setButterflies(newButterflies);
    }
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="App" >
          <header className="App-header">
          <p></p>
          {butterflies.map((clicked, index) => (
            <div
              key={index}
              className={`butterfly ${clicked ? 'clicked' : ''}`}
              onClick={() => handleButterflyClick(index)}
              style={{ position: 'absolute', left: positions[index]?.left, top: positions[index]?.top }}
            >
              🦋
            </div>
          ))}
        </header>
      </div>
      } />
      <Route path="/valentine" element={<ValentinePage />} />
    </Routes>
  );
}

export default App;
