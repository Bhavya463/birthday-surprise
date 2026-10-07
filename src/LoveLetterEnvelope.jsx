import { useState } from "react";
import "./LoveLetterEnvelope.css";

function LoveLetterEnvelope() {
  const [unlocked, setUnlocked] = useState(false);
  const [opened, setOpened] = useState(false);
  const [balloonReleased, setBalloonReleased] = useState(false);

  const lanterns = ["🏮", "🏮", "🏮", "🏮", "🏮", "🏮"];

  return (
    <section
      className={`love-letter-section ${
        opened ? "letter-opened" : ""
      }`}
    >

      {opened && (
        <div className="lantern-sky">

          <div className="stars">
            ✦　·　✧　　·　✦　　·　✧　　·　✦
          </div>

          {lanterns.map((lantern, index) => (
            <span
              key={index}
              className="sky-lantern"
              style={{
                left: `${8 + index * 17}%`,
                animationDelay: `${index * 1.2}s`
              }}
            >
              {lantern}
            </span>
          ))}

        </div>
      )}

      {!opened ? (
        <>
          <p className="small-text">
            A little something from my heart ❤️
          </p>

          <h1>A Letter For You 💌</h1>

          {!unlocked ? (
            <>
              <p className="letter-intro">
                I wrote something especially for you.
                But there's a little lock on it... 🔒
              </p>

              <div className="romantic-envelope">

                <div className="envelope-flap">
                  💕
                </div>

                <div className="envelope-body">

                  <div className="envelope-heart">
                    ❤️
                  </div>

                  <div className="envelope-lock">
                    🔒
                  </div>

                </div>

              </div>

              <p className="unlock-text">
                This letter contains a piece of my heart. ❤️
              </p>

              <button
                className="unlock-button"
                onClick={() => setUnlocked(true)}
              >
                Unlock My Heart 🔓
              </button>
            </>
          ) : (
            <>
              <div className="romantic-envelope unlocked">

                <div className="envelope-flap opened-flap">
                  💕
                </div>

                <div className="envelope-body">

                  <div className="envelope-heart">
                    ❤️
                  </div>

                  <div className="envelope-lock unlocked-lock">
                    🔓
                  </div>

                </div>

              </div>

              <p className="unlock-text">
                The lock is open... ❤️
              </p>

              <button
                className="open-letter-button"
                onClick={() => setOpened(true)}
              >
                Open My Letter 💌
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <div className="letter-night-content">

            <div className="open-envelope-icon">
              💌
            </div>

            <p className="small-text">
              From my heart to yours... ❤️
            </p>

            <h1>My Letter For You</h1>

            <div className="love-letter-paper">

              <p className="letter-greeting">
                Happy Birthday, My dear hubby ❤️ Sweetheart ❤️  Darling ❤️ 
              </p>

              <p>
                You are my life, and no matter what situation
                we are in, I will always be by your side.
              </p>

              <p>
                I want to see you always happy, smiling, and
                achieving every single dream you have.
              </p>

              <p>
                I hope everything you have ever wished for
                comes true, and that you achieve everything
                you have dreamed about.
              </p>

              <p>
                I just want our love to stay this beautiful
                until the end of our lives.
              </p>

              <p>
                I want us to be together, love each other,
                and make beautiful memories together.
              </p>

              <p>
                I will always love you, no matter what. ❤️
              </p>

              <p>
                Please never leave me and never let me go.
                You are my forever love, and I want you to
                always remember how special you are to me.
              </p>

              <p>
                Once again, Happy Birthday, my muddu baby. 🎂❤️ I love you always 
              </p>

              <p className="letter-signature">
                Forever yours. 💕
              </p>

            </div>

            {!balloonReleased ? (
              <div className="wish-area">

                <p className="wish-intro">
                  And now... I have one little wish for you. ❤️
                </p>

                <div className="wish-balloon">
                  <div className="balloon">
                    🎈
                  </div>

                  <div className="balloon-string">
                    │
                    <br />
                    │
                    <br />
                    │
                  </div>
                </div>

                <button
                  className="wish-button"
                  onClick={() => setBalloonReleased(true)}
                >
                  Release Your Wish 🎈
                </button>

              </div>
            ) : (
              <div className="wish-released">

                <div className="released-balloon">
                  🎈
                </div>

                <div className="wish-sparkles">
                  ✨　💖　✨　💕　✨
                </div>

                <h2>
                  Make a Wish ✨
                </h2>

                <p>
                  May every wish you make come true.
                </p>

                <p>
                  May your dreams take you higher and higher.
                </p>

                <p>
                  And may you always have reasons to smile. ❤️
                </p>

              </div>
            )}

            <div className="lantern-message">

              <p>
                🏮 May all your dreams rise higher and higher...
              </p>

              <p>
                And may every wish in your heart come true. ❤️
              </p>

            </div>

          </div>
        </>
      )}

    </section>
  );
}

export default LoveLetterEnvelope;