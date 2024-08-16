import React, { useRef, useState } from 'react';

function App() {
  const musicRef = useRef(new Audio("/music/AdoValue.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      musicRef.current.pause();
    } else {
      musicRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const resetMusic = () => {
    musicRef.current.currentTime = 0;
    setIsPlaying(false);
    musicRef.current.pause();
  };

  return (
    <div>
      <button onClick={toggleMusic}>
        {isPlaying ? "PAUSE!!" : "PLAY MUSIC!!!"}
      </button>
      <button onClick={resetMusic}>RESET!!</button>
    </div>
  );
}

export default App;
