import {StyleSheet} from 'react-native';
import React from 'react';
import MoviesList from '../../../components/moviesList';

const Popular = ({horizontal, numColumns, imageStyle}) => {
  return (
    <MoviesList
      type="popular"
      imageStyle={imageStyle}
      listStyle={styles.container}
      horizontal={horizontal}
      numColumns={numColumns}
    />
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
