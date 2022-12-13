import {FlatList, Text, Image, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
const MoviesList = ({
  type,
  imageStyle,
  horizontal,
  listStyle,
  numColumns,
  number,
  numStyle,
}) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const {navigate} = useNavigation();

  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;

  const fetchMovies = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setMovies(data.results);
  };

  const getGenres = async () => {
    try {
      const response = await fetch(genresUrl);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    getGenres();
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      numColumns={numColumns}
      data={movies}
      horizontal={horizontal}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <Pressable
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
          }
          style={[styles.container, listStyle]}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={[styles.image, imageStyle]}
          />
          {number && <Text style={numStyle}>{index + 1}</Text>}
        </Pressable>
      )}
    />
  );
};

export default MoviesList;
