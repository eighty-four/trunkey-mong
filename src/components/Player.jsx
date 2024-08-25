import React, { useRef, useState } from 'react';

const Player = () => {
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
    <>
        <button onClick={toggleMusic} className={`${
            isPlaying ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"
        } text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}>
        {isPlaying ? "PAUSE" : "PLAY MUSIC"}
        </button>
        <button onClick={resetMusic} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-4">RESET</button>
    </>
  )
}

export default Player
