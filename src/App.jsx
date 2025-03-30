import React from 'react';
import './index.css'; // Import custom CSS for gradient background.
import Particles from "react-tsparticles"; // Optional particle background.
import CopilotAgent from './Copilot'; // Import the CopilotAgent component.

const App = () => {
  const particleOptions = {
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      move: { speed: 2 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
    },
  };

  return (
    <div className="gradient-background">
      <Particles options={particleOptions} style={{ position: "absolute", top: 0, left: 0 }} />
      <CopilotAgent />
    </div>
  );
};

export default App;
