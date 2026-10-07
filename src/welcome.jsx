function Welcome(props) {
  return (
    <>
      <p className="small-text">
        A little surprise for you...
      </p>

      <h1>Happy Birthday {props.name} ❤️</h1>

      <p className="message">
        {props.message}
      </p>
    </>
  );
}

export default Welcome;