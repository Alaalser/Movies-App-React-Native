import {StyleSheet} from 'react-native';
import {typography} from '../../../../utils/theme/typography';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
  },
  list: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    marginTop: 10,
    ...typography.S.regular,
  },
});
