import {StyleSheet} from 'react-native';
import {typography} from '../../../../utils/theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  listContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    ...typography.XS.regular,
  },
  liftContainer: {
    flexDirection: 'column',
    paddingRight: 20,
  },
  rightContainer: {
    flexDirection: 'column',
  },
  rate: {
    color: '#0296E5',
    paddingLeft: 20,
    paddingVertical: 10,
    ...typography.XS.regular,
  },
});
