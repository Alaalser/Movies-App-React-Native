import {StyleSheet} from 'react-native';
import {typography} from '../../utils/theme/typography';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  container1: {
    flex: 1,
    backgroundColor: '#242A32',
  },
  image: {
    width: 95,
    height: 120,
    position: 'absolute',
    top: 175,
    left: 40,
    borderRadius: 16,
  },
  cover: {
    width: '100%',
    height: 210,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    marginLeft: 150,
    paddingTop: 12,
    color: '#fff',
    paddingBottom: 50,
    ...typography.L.semibold,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252836',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 180,
    right: 10,
  },
  rate: {
    color: '#FF8700',
    fontWeight: 'bold',
    marginLeft: 5,
    ...typography.XS.semibold,
  },
  listDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  btnSelected: {
    borderColor: '#3A3F47',
    borderBottomWidth: 5,
  },
  button: {
    paddingBottom: 10,
    marginHorizontal: 5,
  },
  text: {
    color: 'white',
    color: '#fff',
    marginHorizontal: 5,
    ...typography.XS.regular,
  },
  textDetails: {
    color: 'white',
    color: '#92929D',
    marginHorizontal: 5,
    ...typography.XS.regular,
  },

  overview: {
    color: '#fff',
    marginTop: 20,
    marginHorizontal: 20,
    ...typography.S.regular,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 80,
  },
  dateDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBorder: {
    borderRightWidth: 1,
    height: 20,
    borderColor: '#92929D',
    marginHorizontal: 10,
  },
});
