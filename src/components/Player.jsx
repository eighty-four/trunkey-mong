import { useState, useEffect } from 'react';

const Player = () => {
    const musicNames = [
        "Home Stretch - Gunnar Olsen.opus",
        "Trancer - Gunnar Olsen.opus",
        "Tremsz - Gunnar Olsen.opus"
    ];
    
    const [nowPlaying, setNowPlaying] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicRefs] = useState(musicNames.map(name => new Audio(`/music/${name}`)));
    const [sliderValue, setSliderValue] = useState(0);
    const [duration, setDuration] = useState(0);

    const playNewMusic = (index) => {
        musicRefs[nowPlaying].pause();
        musicRefs[nowPlaying].currentTime = 0;
        
        setNowPlaying(index);
        musicRefs[index].play();
        setIsPlaying(true);
    };

    const toggleMusic = () => {
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

    const handleSliderChange = (e) => {
        musicRefs[nowPlaying].currentTime = e.target.value;
        setSliderValue(newTime);
    };

    useEffect(() => {
        const audio = musicRefs[nowPlaying];
        
        const updateSlider = () => {
            setSliderValue(audio.currentTime);
        };
    
        setDuration(audio.duration);
        setSliderValue(audio.currentTime);

        audio.addEventListener('timeupdate', updateSlider);
    
        return () => {
            audio.removeEventListener('timeupdate', updateSlider);
        };

    }, [nowPlaying, isPlaying]);
    

    return (
        <>
            <ul>
                {musicNames.map((name, index) => (
                    <li
                        key={index}
                        onClick={() => playNewMusic(index)}
                        className={index === nowPlaying ? "bg-gray-300 text-blue-500" : ""}
                    >
                        {name}
                    </li>
                ))}
            </ul>

            <button
                onClick={toggleMusic}
                className={`${
                    isPlaying ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"
                } text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
                {isPlaying ? "PAUSE" : "PLAY MUSIC"}
            </button>
            
            <button
                onClick={resetMusic}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-4"
            >
                RESET
            </button>

            <input
                type="range"
                min="0"
                max={duration}
                value={sliderValue}
                onChange={handleSliderChange}
            />
        </>
    );
};

export default Player;