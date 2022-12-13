import {Text, View} from 'react-native';
import Carousel from './carousel';
import MoviesCategory from './MoviesCategory';
import SearchInput from '../../components/searchInput';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();

  const onSubmitSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to watch?</Text>
      <SearchInput onTouchStart={onSubmitSearch} />
      <Carousel />
      <MoviesCategory />
    </View>
  );
};

export default Home;
