import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        movie={{
          title: "Haland Hunt",
          year: "2022",
          genre: "Action",
          url: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_FMjpg_UX1000_.jpg",
        }}
      />
    </>
  );
}

export default App;
