import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [displayText, setDisplayText] = useState("Play a sound");

  const handleClick = (soundName, key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplayText(soundName);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const sounds = {
        Q: "Heater 1",
        W: "Heater 2",
        E: "Heater 3",
        A: "Heater 4",
        S: "Clap",
        D: "Open-HH",
        Z: "Kick-n'-Hat",
        X: "Kick",
        C: "Close-HH",
      };

      if (sounds[key]) {
        handleClick(sounds[key], key);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
   <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div id="pad-container">
        {[
          { key: "Q", name: "Heater 1", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
          { key: "W", name: "Heater 2", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
          { key: "E", name: "Heater 3", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
          { key: "A", name: "Heater 4", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
          { key: "S", name: "Clap", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
          { key: "D", name: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
          { key: "Z", name: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
          { key: "X", name: "Kick", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
          { key: "C", name: "Close-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
        ].map(({ key, name, src }) => (
          <button
            key={key}
            className="drum-pad"
            id={name}
            onClick={() => handleClick(name, key)}
          >
            {key}
            <audio className="clip" id={key} src={src}></audio>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
