function LoveReasons() {
  const reasons = [
    "Your beautiful smile 😊",
    "The way you always make me feel special ❤️",
    "Your kindness 🥰",
    "The way you support me 🤗",
    "Simply because you are you. 💕"
  ];

  return (
    <section className="love-reasons">
      <div className="love-heart">
        💕
      </div>

      <p className="small-text">
        There are so many reasons... ❤️
      </p>

      <h1>Things I Love About You</h1>

      <p className="message">
        If I started writing every reason, this website
        would never end. ❤️
      </p>

      <div className="reasons-list">
        {reasons.map((reason, index) => (
          <div
            className="reason-card"
            key={index}
            style={{
              animationDelay: `${index * 0.5}s`
            }}
          >
            <span className="reason-number">
              {index + 1}
            </span>

            <span>
              {reason}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoveReasons;