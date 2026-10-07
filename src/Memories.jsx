import memory1 from "./assets/memory1.jpeg";
import memory2 from "./assets/memory2.jpeg";
import song from "./assets/birthday-song.mp3";

function Memories() {
  return (
    <section className="memories-section">

      <p className="small-text">
        A little piece of us ❤️
      </p>

      <h2>Our Memories 📸</h2>

      <p className="message">
        Every moment with you has become a memory
        that I want to keep forever.
      </p>

      <div className="memory-gallery">

        <div className="memory-card">
          <img
            src={memory1}
            alt="Our first special memory"
            className="memory-image"
          />

       
        </div>

        <div className="memory-card">
          <img
            src={memory2}
            alt="Another beautiful memory of us"
            className="memory-image"
          />

       
        </div>

      </div>

      <div className="special-song">

        <p className="small-text">
          This song reminds me of you 🎶❤️
        </p>

        <h2>Our Song 🎵</h2>

        <p className="message">
          This song is playing just for you. ❤️
        </p>

        <audio controls>
          <source src={song} type="audio/mpeg" />
        </audio>

      </div>

    </section>
  );
}

export default Memories;