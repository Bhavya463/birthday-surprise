import { useState } from "react";

function FinalSurprise() {
  const [showMessage, setShowMessage] = useState(false);

  const hearts = ["❤️", "💕", "💖", "💗", "💓", "💘", "❤️", "💕"];

  return (
    <section className="final-surprise">
      {!showMessage ? (
        <>
          <div className="final-gift">
            🎁
          </div>

          <p className="small-text">
            Wait... there's one more thing ❤️
          </p>

          <h1>One Last Surprise</h1>

          <p className="message">
            I saved the most important thing for the very end...
          </p>

          <p className="final-small-message">
            Something I want you to remember forever. ❤️
          </p>

          <button
            className="final-button"
            onClick={() => setShowMessage(true)}
          >
            Open One Last Surprise ❤️
          </button>
        </>
      ) : (
        <>
          <div className="falling-hearts">
            {hearts.map((heart, index) => (
              <span
                key={index}
                className="falling-heart"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  left: `${10 + index * 11}%`
                }}
              >
                {heart}
              </span>
            ))}
          </div>

          <div className="final-heart">
            ❤️
          </div>

          <p className="final-small-message">
            From my heart to yours...
          </p>

          <h1>
            Happy Birthday,
            <br />
            My Ganda! 🎂❤️
          </h1>

          <div className="final-message-box">
            <p className="final-message">
              You are not just someone I love.
              <br />
              You are someone I want beside me
              <br />
              through every chapter of my life.
            </p>

            <p className="final-message">
              I want to laugh with you,
              <br />
              grow with you,
              <br />
              dream with you,
              <br />
              and create countless beautiful memories with you.
            </p>

            <p className="final-message">
              No matter where life takes us,
              <br />
              I hope we always find our way back to each other. ❤️
            </p>

            <p className="final-message">
              You will always have a very special place
              <br />
              in my heart.
            </p>
          </div>

          <p className="forever">
            Forever yours. 💕
          </p>

          <p className="final-love">
            I love you Chinna❤️
          </p>
        </>
      )}
    </section>
  );
}

export default FinalSurprise;