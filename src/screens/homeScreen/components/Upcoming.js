import {StyleSheet} from 'react-native';
import React from 'react';
import MoviesList from '../../../components/moviesList';

const Upcoming = ({horizontal, numColumns, imageStyle}) => {
  return (
    <MoviesList
      type="upcoming"
      imageStyle={imageStyle}
      listStyle={styles.container}
      horizontal={horizontal}
      numColumns={numColumns}
      
    />
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
