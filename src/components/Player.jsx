import React, { useEffect, useRef, useState } from 'react';

const Player = () => {
    const musicNames = ["Home Stretch - Gunnar Olsen.opus", "Trancer - Gunnar Olsen.opus", "Tremsz - Gunnar Olsen.opus"]
    //const musicRef = useRef(new Audio("/music/AdoValue.mp3"));
    const [nowPlaying, setNowPlaying] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    //const [musicRef, setMusicRef] = useState(new Audio("/music/" + musicNames[nowPlaying]));
    const [musicRefs, setMusicRefs] = useState(musicNames.map((name) => {return new Audio("/music/" + name)}));
    const sliderRef = useRef(null);

    const playNewMusic = (index) => {
        musicRefs[nowPlaying].pause()
        setNowPlaying(index);
        musicRefs[index].play();
        setIsPlaying(true);
    }

    const toggleMusic = () => {
        console.log(musicRefs)
        if (isPlaying) {
          musicRefs[nowPlaying].pause();
        } else {
          musicRefs[nowPlaying].play();
        }
        setIsPlaying(!isPlaying);
    };
    
    const resetMusic = () => {
        musicRefs[nowPlaying].currentTime = 0;
        setIsPlaying(false);
        musicRefs[nowPlaying].pause();
    };

    const moveToFraction = (fraction) => {
        musicRefs[nowPlaying].currentTime = musicRefs[nowPlaying].duration * fraction
    };
/*
    useEffect(() => {
        moveToFraction(sliderRef.current.value);
    }, [sliderRef]);*/

  return (
    <>
        <ul>
            {musicNames.map((name, index) => (
                <li key={index} onClick={() => {playNewMusic(index)}} className={`${index == nowPlaying && "bg-gray-300 text-blue-500"}`}>{name}</li>
            ))}
        </ul>

        <input
            type="range"
            ref={sliderRef}
            value={(musicRefs[nowPlaying].currentTime) ? musicRefs[nowPlaying].currentTime/musicRefs[nowPlaying].duration : 0}
            onInput={() => moveToFraction(sliderRef.current.value)}
            min={0}
            max={1}
            step={0.0001}
        />

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
