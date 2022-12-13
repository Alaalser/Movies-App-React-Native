import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  image: {
    width: 95,
    height: 120,
    borderRadius: 16,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    color: '#EEEEEE',
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 2,
  },
  rate: {
    color: 'white',
    marginLeft: 5,
    color: '#FF8700',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 2,
  },
  details: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 29,
  },
  errorMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  hintText: {
    color: '#EEEEEE',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    
  },
  hintContainer: {
    paddingVertical: 5,
  },
});
