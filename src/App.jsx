import { useState, useRef } from "react";
import "./App.css";

import Welcome from "./welcome";
import BirthdayMessage from "./BirthdayMessage";
import Memories from "./Memories";
import BirthdayLetter from "./BirthdayLetter";
import LoveReasons from "./LoveReasons";
import FinalSurprise from "./FinalSurprise";

import song from "./assets/birthday-song.mp3";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const audioRef = useRef(null);

  const hearts = ["❤️", "💕", "💗", "💖", "💓", "💕"];

  const openSurprise = () => {
    setIsOpen(true);

    audioRef.current.play();
  };

  return (
    <div className="birthday-page">

      <div className="background-hearts">
        {hearts.map((heart, index) => (
          <span
            key={index}
            className="background-heart"
            style={{
              left: `${10 + index * 15}%`,
              animationDelay: `${index * 1.2}s`
            }}
          >
            {heart}
          </span>
        ))}
      </div>

      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      <div className="birthday-card">

        {!isOpen ? (
          <>
            <Welcome
              name="My Love"
              message="Today is a special day because someone very special was born. ❤️"
            />

            <button onClick={openSurprise}>
              Open Your Surprise 🎁
            </button>
          </>
        ) : (
          <>
            {page === 1 && (
              <>
                <BirthdayMessage />

                <button
                  className="next-button"
                  onClick={() => setPage(2)}
                >
                  Continue to Our Memories 📸
                </button>
              </>
            )}

            {page === 2 && (
              <>
                <Memories />

                <button
                  className="next-button"
                  onClick={() => setPage(3)}
                >
                  Continue to My Letter 💌
                </button>
              </>
            )}

            {page === 3 && (
              <>
                <BirthdayLetter />

                <button
                  className="next-button"
                  onClick={() => setPage(4)}
                >
                  Things I Love About You 💕
                </button>
              </>
            )}

            {page === 4 && (
              <>
                <LoveReasons />

                <button
                  className="next-button"
                  onClick={() => setPage(5)}
                >
                  One Last Surprise 🎁
                </button>
              </>
            )}

            {page === 5 && <FinalSurprise />}
          </>
        )}

      </div>
    </div>
  );
}

export default App;