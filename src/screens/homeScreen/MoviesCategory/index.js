import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import NowPlaying from '../components/NowPlaying';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import Upcoming from '../components/Upcoming';
import Button from '../../../components/button';
import {styles} from './styles';

const MoviesCategory = () => {
  const [list, setList] = useState([
    {
      name: 'Now Playing',
      selected: true,
    },
    {
      name: 'Upcoming',
      selected: false,
    },
    {
      name: 'Top Rated',
      selected: false,
    },
    {
      name: 'Popular',
      selected: false,
    },
  ]);

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

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={list}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.name}
          horizontal
          renderItem={({item}) => (
            <View>
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
      <View style={styles.listContainer}>
        {list[0].selected ? (
          <NowPlaying numColumns={3} imageStyle={styles.image} />
        ) : null}
        {list[1].selected ? (
          <Upcoming numColumns={3} imageStyle={styles.image} />
        ) : null}
        {list[2].selected ? (
          <TopRated numColumns={3} imageStyle={styles.image} />
        ) : null}
        {list[3].selected ? (
          <Popular numColumns={3} imageStyle={styles.image} />
        ) : null}
      </View>
    </View>
  );
};

export default MoviesCategory;
