import { useState, useRef } from "react";
import "./App.css";

import Welcome from "./welcome";
import BirthdayCake from "./BirthdayCake";
import BirthdayMessage from "./BirthdayMessage";
import Memories from "./Memories";
import LoveLetterEnvelope from "./LoveLetterEnvelope";
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

            {/* PAGE 1 - BIRTHDAY CAKE */}

            {page === 1 && (
              <>
                <BirthdayCake />

                <button
                  className="next-button"
                  onClick={() => setPage(2)}
                >
                  Continue 💕
                </button>
              </>
            )}

            {/* PAGE 2 - BIRTHDAY MESSAGE */}

            {page === 2 && (
              <>
                <BirthdayMessage />

                <button
                  className="next-button"
                  onClick={() => setPage(3)}
                >
                  Continue to Our Memories 📸
                </button>
              </>
            )}

            {/* PAGE 3 - MEMORIES */}

            {page === 3 && (
              <>
                <Memories />

                <button
                  className="next-button"
                  onClick={() => setPage(4)}
                >
                  Continue to My Letter 💌
                </button>
              </>
            )}

            {/* PAGE 4 - LOCKED LETTER */}

            {page === 4 && (
              <>
                <LoveLetterEnvelope />

                <button
                  className="next-button"
                  onClick={() => setPage(5)}
                >
                  Continue 💕
                </button>
              </>
            )}

            {/* PAGE 5 - LOVE REASONS */}

            {page === 5 && (
              <>
                <LoveReasons />

                <button
                  className="next-button"
                  onClick={() => setPage(6)}
                >
                  One Last Surprise 🎁
                </button>
              </>
            )}

            {/* PAGE 6 - FINAL SURPRISE */}

            {page === 6 && <FinalSurprise />}

          </>
        )}

      </div>
    </div>
  );
}

export default App;