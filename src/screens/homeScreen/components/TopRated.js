import {StyleSheet} from 'react-native';
import React from 'react';
import MoviesList from '../../../components/moviesList';

const TopRated = ({horizontal, numColumns, imageStyle, number, numStyle}) => {
  return (
    <MoviesList
      type="top_rated"
      imageStyle={imageStyle}
      listStyle={styles.container}
      horizontal={horizontal}
      numColumns={numColumns}
      number={number}
      numStyle={numStyle}
    />
  );
};

export default TopRated;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
