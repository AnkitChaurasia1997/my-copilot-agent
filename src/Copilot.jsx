import React from 'react';
import { Box } from '@mui/material';

const CopilotAgent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-8d1a69ec-03b5-4345-ae21-dad112f5fb4f/bots/cr0f0_agent92B10u/webchat?__version__=2"
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      ></iframe>
    </Box>
  );
};

export default CopilotAgent;
