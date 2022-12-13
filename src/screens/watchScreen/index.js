import {Text, View, FlatList, Pressable, Image} from 'react-native';
import {MovieListContext} from '../../store/context/watchList';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {styles} from './styles';

const WatchList = () => {
  const {movies} = useContext(MovieListContext);

  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              style={styles.details}
              onPress={() =>
                navigate('details', {
                  id: item.id,
                })
              }>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster}`,
                }}
                style={styles.image}
              />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rateContainer}>
                  <SvgXml xml={icons.rate} height={13} width={13} />
                  <Text style={styles.rate}>{item.rate}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.genre} height={13} width={13} />
                  <Text style={styles.text}>{item.genre}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.year} height={13} width={13} />
                  <Text style={styles.text}>
                    {item.release && item.release.substring(0, 4)}
                  </Text>
                </View>
                <View style={styles.detailsContainer}>
                  <SvgXml xml={icons.details.duration} height={13} width={13} />
                  <Text style={styles.text}>{item.runtime} min</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.errorMessage}>
          <SvgXml xml={icons.emptyWatchList} height={76} width={76} />
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

export default WatchList;
