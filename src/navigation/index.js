import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen';
import Search from '../screens/searchScreen';
import WatchList from '../screens/watchScreen';
import MovieDetails from '../screens/detailsScreen';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {useNavigation} from '@react-navigation/native';
import {Pressable, View} from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyStack() {
  const {navigate} = useNavigation();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          options={{
            headerLeft: () => (
              <Pressable
                style={{paddingRight: 10}}
                onPress={() => navigate('Home')}>
                <SvgXml style={{color: 'white'}} xml={icons.header.backArrow} />
              </Pressable>
            ),
            headerRight: () => (
              <SvgXml
                style={{paddingLeft: 10, color: 'white'}}
                xml={icons.header.info}
              />
            ),
            headerStyle: {
              backgroundColor: '#242A32',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
          name="details"
          component={MovieDetails}
        />
      </Stack.Navigator>
    </>
  );
}

function MyTabs() {
  const {navigate} = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#242A32',
          height: 80,
          borderTopColor: '#0296E5',
          borderTopWidth: 1,
          paddingBottom: 20,
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? icons.tab.home2 : icons.tab.home;
          } else if (route.name === 'Search') {
            iconName = focused ? icons.tab.search2 : icons.tab.search;
          } else if (route.name === 'WatchList') {
            iconName = focused ? icons.tab.watchList2 : icons.tab.home;
          }
          return <SvgXml xml={iconName} />;
        },
        headerStyle: {
          backgroundColor: '#242A32',
        },
        tabBarActiveTintColor: '#0296E5',
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <Pressable
              style={{paddingHorizontal: 15}}
              onPress={() => navigate('Home')}>
              <SvgXml style={{color: 'white'}} xml={icons.header.backArrow} />
            </Pressable>
          ),
          headerRight: () => (
            <View style={{paddingHorizontal: 15}}>
              <SvgXml
                style={{paddingLeft: 10, color: 'white'}}
                xml={icons.header.info}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#242A32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <Pressable
              style={{paddingHorizontal: 15}}
              onPress={() => navigate('Home')}>
              <SvgXml style={{color: 'white'}} xml={icons.header.backArrow} />
            </Pressable>
          ),

          headerStyle: {
            backgroundColor: '#242A32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
        }}
        name="WatchList"
        component={WatchList}
      />
    </Tab.Navigator>
  );
}

export default MyStack;
