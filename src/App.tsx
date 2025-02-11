import RobustImage from './components/RobustImage/RobustImage';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      gap: '20px'
    }}>
      <h1>Robust Image Showcase</h1>
      
      <RobustImage 
        src="https://picsum.photos/800/600" 
        alt="Random Image"
        style={{ 
          maxWidth: '100%', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
        }}
        placeholder={<div>Loading...</div>}
      />
      
      <RobustImage 
        src="https://invalid-url.com/nonexistent.jpg" 
        alt="Fallback Image Test"
        fallbackSrc="https://picsum.photos/400/300"
        style={{ 
          maxWidth: '100%', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
        }}
        placeholder={<div>Loading fallback image...</div>}
      />
    </div>
  );
}

export default App;
