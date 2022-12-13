import {Text, View, Image, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useEffect, useState, useContext, useLayoutEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import Button from '../../components/button';
import Reviews from './components/reviews';
import Cast from './components/cast';
import {MovieListContext} from '../../store/context/watchList';
import {styles} from './styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [list, setList] = useState([
    {
      name: 'About Movie',
      selected: true,
    },
    {
      name: 'Reviews',
      selected: false,
    },
    {
      name: 'Cast',
      selected: false,
    },
  ]);

  const navigate = useNavigation();

  const route = useRoute();
  const {id, title, rate, release, poster, genre} = route.params;
  const runtime = movie.runtime;

  const movies = useContext(MovieListContext);

  const isAdded = movies.movies.find(ele => ele.id === id);

  function headerButtonPressHandler() {
    if (isAdded) {
      movies.remove(id);
    } else {
      movies.add(id, title, rate, release, poster, genre, runtime);
    }
  }

  useLayoutEffect(() => {
    navigate.setOptions({
      headerRight: () => {
        return (
          <SvgXml
            xml={isAdded ? icons.header.added : icons.header.notAdded}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigate, headerButtonPressHandler]);

  const selectedList = item => {
    setList(
      list.map(ele => {
        if (ele.name === item.name) {
          return {
            ...ele,
            selected: true,
          };
        }
        return {
          ...ele,
          selected: false,
        };
      }),
    );
  };

  const getMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-USS`,
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
          style={styles.cover}
        />
        <View style={styles.rateContainer}>
          <SvgXml xml={icons.rate} width={16} height={16} />
          <Text style={styles.rate}>
            {movie.vote_average &&
              movie.vote_average.toString().length > 0 &&
              movie.vote_average.toString().substring(0, 3)}
          </Text>
        </View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View>
        <FlatList
          data={list}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.name}
          horizontal
          renderItem={({item}) => (
            <View style={styles.listDetails}>
              <Button
                buttonStyle={[
                  styles.button,
                  item.selected && styles.btnSelected,
                ]}
                textStyle={styles.text}
                onPress={() => selectedList(item)}>
                {item.name}
              </Button>
            </View>
          )}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.dateDetails}>
          <SvgXml xml={icons.details.yearDetail} width={16} height={16} />
          <Text style={styles.textDetails}>
            {movie && movie.release_date ? (
              movie.release_date.slice(0, 4)
            ) : (
              <></>
            )}
          </Text>
        </View>
        <View style={styles.viewBorder}></View>
        <View style={styles.dateDetails}>
          <SvgXml xml={icons.details.durationDetail} width={16} height={16} />
          <Text style={styles.textDetails}>{movie.runtime} min</Text>
        </View>
        <View style={styles.viewBorder}></View>
        <View style={styles.dateDetails}>
          <SvgXml xml={icons.details.genreDetail} width={16} height={16} />
          <Text style={styles.textDetails}>
            {movie && movie.genres ? movie.genres[0].name : <></>}
          </Text>
        </View>
      </View>
      {list[0].selected ? (
        <>
          <Text style={styles.overview}>{movie.overview}</Text>
        </>
      ) : null}
      {list[1].selected ? <Reviews id={id} /> : null}
      {list[2].selected ? <Cast id={id} /> : null}
    </View>
  );
};

export default MovieDetails;
