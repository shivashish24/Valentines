import React, { useState } from 'react';
import './Valentine.css';

const ValentinePage = () => {
  const [celebrationActive, setCelebrationActive] = useState(false);

  const handleCelebrateClick = () => {
    setCelebrationActive(true);
    startCelebration();
    createFloatingHearts();  // Start hearts when button is clicked
    setTimeout(() => setCelebrationActive(false), 5000);
  };

  const handleButtonHover = (e) => {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 50);
    e.target.style.position = 'absolute';
    e.target.style.left = `${randomX}px`;
    e.target.style.top = `${randomY}px`;
  };

  const createFloatingHearts = () => {
    const container = document.querySelector(".valentine-page");
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      heart.innerHTML = "💖";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);  // Remove hearts after they float out
    }
  };

  const createFirework = () => {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1500);
  };

  const createHeartConfetti = () => {
    const heart = document.createElement("div");
    heart.classList.add("confetti-heart");
    heart.innerHTML = "💖";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${-10}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  };

  const startCelebration = () => {
    const fireworkInterval = setInterval(createFirework, 300);
    const heartInterval = setInterval(createHeartConfetti, 300);

    setTimeout(() => {
      clearInterval(fireworkInterval);
      clearInterval(heartInterval);
    }, 4000);
  };

  return (
    <div className="valentine-page">
      <h1>💖 Happy Valentine's Day! 💖</h1>
      <h3>Would you be my Valentine?</h3>

      <div className="button-container">
        <button className="celebrate-button" onClick={handleCelebrateClick}>
          YES! 🎉
        </button>
        <button className="moving-button" onMouseOver={handleButtonHover}>
          NO! 😢
        </button>
      </div>

      {celebrationActive && <div className="celebration-animation">🎆🎈💝</div>}
    </div>
  );
};

export default ValentinePage;
