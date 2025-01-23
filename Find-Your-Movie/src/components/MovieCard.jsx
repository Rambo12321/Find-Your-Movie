function MovieCard(props) {
  function favClickHandler() {
    console.log("clicked");
  }
  const { movie } = props;
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={favClickHandler}>
            ❣️
          </button>
        </div>
      </div>
      <div className="movie-indo">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
