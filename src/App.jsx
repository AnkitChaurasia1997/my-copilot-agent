import React from 'react';
import './index.css';
import Particles from "react-tsparticles";
import CopilotAgent from './Copilot'; 
import { Typography, Box } from '@mui/material';

const App = () => {
  const particleOptions = {
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      move: { speed: 2 },
      links: { enable: true, color: "#ffffff" },
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
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "50px" }}>
        {/* Moving Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          Career Wise
        </Typography>

        {/* Small Heading */}
        <Typography variant="h5" sx={{ color: '#ffffff', marginTop: '20px' }}>
          AI Magic Agent
        </Typography>

        {/* Description */}
        <Typography variant="body3" sx={{ color: '#ffffff', marginTop: '10px', maxWidth: '600px', marginInline: 'auto' }}>
          Discover insights about careers and industries with our AI-powered assistant that answers all your questions in real-time!
        </Typography>

        {/* Bot Component */}
        <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <CopilotAgent />
        </Box>
      </Box>
    </div>
  );
};

export default App;
