import {FlatList, Text, View, Image, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import SearchInput from '../../components/searchInput';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState([]);
  const [genreID, setGenreID] = useState('');

  const {navigate} = useNavigation();

  const getGenreId = () => {
    genres &&
      genres.map(genre => {
        if (genre.name === search) {
          setGenreID(genre.id);
        }
      });
  };

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;
  const actorsUrl = `https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&query=${search}`;
  const searchGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;
  const discoverKeyWordsUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=${search}`;

  const searchMovie = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (movies) {
      setMovies(
        movies
          .concat(
            data.results.filter(m => !movies.map(m => m.id).includes(m.id)),
          )
          .reverse(),
      );
    } else {
      setMovies(data.results);
    }
  };
  const moviesByGenres = async () => {
    const response = await fetch(searchGenreUrl);
    const data = await response.json();
    if (movies) {
      setMovies(
        movies
          .concat(
            data.results.filter(m => !movies.map(m => m.id).includes(m.id)),
          )
          .reverse(),
      );
    } else {
      setMovies(data.results);
    }
  };

  const getGenres = async () => {
    const response = await fetch(genresUrl);
    const data = await response.json();
    setGenres(data.genres);
  };

  const moviesByActors = async () => {
    try {
      const response = await fetch(actorsUrl);
      const data = await response.json();
      if (movies) {
        if (search.length > 2) {
          setMovies(
            movies
              .concat(
                data &&
                  data.results[0].known_for.filter(
                    m => !movies.map(m => m.id).includes(m.id),
                  ),
              )
              .reverse(),
          );
        }
      } else {
        setMovies(data.results[0].known_for);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesByKeywords = async () => {
    const response = await fetch(discoverKeyWordsUrl);
    const data = await response.json();
    if (movies) {
      setMovies(
        movies
          .concat(
            data.results.filter(m => !movies.map(m => m.id).includes(m.id)),
          )
          .reverse(),
      );
    } else {
      setMovies(data.results);
    }
  };

  const onChangeSearch = text => {
    setSearch(text);
  };

  onPress = () => {
    getGenreId();
    getGenres();
    moviesByGenres();
    searchMovie();
    moviesByActors();
    getMoviesByKeywords();
  };

  return (
    <View style={styles.container}>
      <SearchInput
        onPress={onPress}
        value={search}
        onChangeText={onChangeSearch}
      />
      {movies ? (
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              style={styles.details}
              onPress={() =>
                navigate('details', {
                  id: item.id,
                  title: item.title,
                  poster: item.poster_path,
                  release: item.release_date,
                  rate: item.vote_average,
                  genre:
                    genres &&
                    genres.map(g => {
                      if (g.id === item.genre_ids[0]) {
                        return g.name;
                      }
                    }),
                })
              }>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.image}
              />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rateContainer}>
                  <SvgXml xml={icons.rate} height={13} width={13} />
                  <Text style={styles.rate}>{item.vote_average}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.genre} height={13} width={13} />
                  <Text style={styles.text}>
                    {genres &&
                      genres.map(genre => {
                        if (genre.id === item.genre_ids[0]) {
                          return genre.name;
                        }
                      })}
                  </Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.year} height={13} width={13} />
                  <Text style={styles.text}>{item.release_date}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.duration} height={13} width={13} />
                </View>
              </View>
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.errorMessage}>
          <SvgXml xml={icons.emptySearchResults} height={76} width={76} />
          <View style={styles.hintContainer}>
            <Text style={styles.errorText}>we are sorry, we can</Text>
            <Text style={styles.errorText}>{`not find the movie :(`}</Text>
          </View>
          <Text style={styles.hintText}>Find your movie by Type title,</Text>
          <Text style={styles.hintText}>categories, years, etc</Text>
        </View>
      )}
    </View>
  );
};

export default Search;
