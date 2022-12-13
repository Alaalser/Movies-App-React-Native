import {FlatList, Text, View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from './styles';

const Cast = ({id}) => {
  const [cast, setCast] = useState([]);

  const getCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`,
    );
    const data = await response.json();
    setCast(data.cast);
  };

  useEffect(() => {
    getCast();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cast}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.list}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
              }}
              style={styles.avatar}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cast;
