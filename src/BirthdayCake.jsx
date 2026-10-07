import { useState } from "react";

function BirthdayCake() {
  const [blown, setBlown] = useState(false);

  return (
    <section className="birthday-cake">

      <p className="small-text">
        Before we continue... ❤️
      </p>

      <h1>Make a Birthday Wish 🎂</h1>

      <p className="message">
        There is one little thing you need to do first...
      </p>

      <div className="cake">

        <div className="candles">

          <div className="candle">
            {!blown && <span className="flame">🔥</span>}
          </div>

          <div className="candle">
            {!blown && <span className="flame">🔥</span>}
          </div>

          <div className="candle">
            {!blown && <span className="flame">🔥</span>}
          </div>

        </div>

        <div className="cake-top">
          <span>🍓</span>
          <span>🍓</span>
          <span>🍓</span>
        </div>

        <div className="cake-middle">
          🎂
        </div>

      </div>

      {!blown ? (
        <>
          <p className="cake-message">
            Close your eyes... make a wish... ✨
          </p>

          <button
            className="blow-button"
            onClick={() => setBlown(true)}
          >
            Blow the Candles 💨
          </button>
        </>
      ) : (
        <>
          <div className="wish-animation">
            ✨ 💕 ✨ 💖 ✨
          </div>

          <h2 className="wish-title">
            Make a Wish! ✨
          </h2>

          <p className="cake-message">
            I hope every wish in your heart comes true. ❤️
          </p>
        </>
      )}

    </section>
  );
}

export default BirthdayCake;