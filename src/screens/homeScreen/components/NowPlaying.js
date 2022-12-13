import React from 'react';
import {StyleSheet} from 'react-native';
import MoviesList from '../../../components/moviesList';

const NowPlaying = ({horizontal, numColumns, imageStyle}) => {
  return (
    <MoviesList
      type="now_playing"
      imageStyle={imageStyle}
      listStyle={styles.container}
      horizontal={horizontal}
      numColumns={numColumns}
    />
  );
};

export default NowPlaying;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
