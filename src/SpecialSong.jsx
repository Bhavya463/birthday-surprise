import song from "./assets/birthday-song.mp3";

function SpecialSong({ audioRef }) {
  return (
    <section className="special-song">
      <p className="small-text">
        This song reminds me of you 🎶❤️
      </p>

      <h2>Our Song 🎵</h2>

      <p className="message">
        This song is for you. ❤️
      </p>

      <audio ref={audioRef} controls>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default SpecialSong;