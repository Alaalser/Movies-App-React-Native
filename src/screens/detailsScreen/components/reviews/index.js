import {FlatList, Text, View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from './styles';

const Reviews = ({id}) => {
  const [reviews, setReviews] = useState();

  const getReviews = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.API_KEY}`,
    );
    const data = await response.json();
    setReviews(data.results);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listContainer}>
            <View style={styles.liftContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`,
                }}
                style={styles.avatar}
              />
              <Text style={styles.rate}>{item.author_details.rating}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.text}>{item.author}</Text>
              <Text style={styles.text}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Reviews;
