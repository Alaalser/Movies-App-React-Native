import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MovieListContext = createContext({
  movies: [],
  add: (id, title, rate, release, poster, genre, runtime) => {},
  remove: id => {},
});

const WatchListContextProvider = ({children}) => {
  const [movies, setMovies] = useState([]);

  const add = (id, title, rate, release, poster, genre, runtime) => {
    setMovies(movies => [
      ...movies,
      {id, title, rate, release, poster, genre, runtime},
    ]);
  };

  const remove = id => {
    setMovies(movies => movies.filter(movie => movie.id !== id));
  };

  const value = {movies, add, remove};

  useEffect(() => {
    AsyncStorage.getItem('movies').then(movies => {
      if (movies) {
        setMovies(JSON.parse(movies));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};

export default WatchListContextProvider;
