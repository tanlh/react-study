import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, run: fetchMovies } = useFetch();
  const {
    isLoading: _addLoading,
    error: _addError,
    run: addMovies,
  } = useFetch();

  useEffect(() => {
    const applyMovies = (data) => {
      const transformedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      setMovies(transformedData);
    };

    fetchMovies({ url: 'https://swapi.dev/api/films/' }, applyMovies);
  }, [fetchMovies]);

  const addMovieHandler = async (movie) => {
    addMovies(
      {
        url: 'https://jsonplaceholder.typicode.com/post',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: movie,
      },
      (data) => {
        console.log(data);
      }
    );
  };

  let content = <p>There is no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
