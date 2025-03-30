import React from 'react';

const CopilotAgent = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-8d1a69ec-03b5-4345-ae21-dad112f5fb4f/bots/cr0f0_agent92B10u/webchat?__version__=2" // Replace with your actual iframe source URL.
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      ></iframe>
    </div>
  );
};

export default CopilotAgent;
