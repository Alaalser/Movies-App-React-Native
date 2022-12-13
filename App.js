import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation';
import WatchListContextProvider from './src/store/context/watchList';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202020'}}>
      <NavigationContainer>
        <WatchListContextProvider>
          <MyStack />
        </WatchListContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
