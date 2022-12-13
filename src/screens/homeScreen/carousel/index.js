import {View} from 'react-native';
import TopRated from '../components/TopRated';
import {styles} from './styles';

const Carousel = () => {
  return (
    <View style={styles.container}>
      <TopRated
        horizontal={true}
        imageStyle={styles.image}
        number={true}
        numStyle={styles.number}
      />
    </View>
  );
};

export default Carousel;
