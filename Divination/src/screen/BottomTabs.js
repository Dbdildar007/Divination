import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './HomeScreen';
import Favorites from './Favorites';
import Results from './Results';
import MyPlace from './MyPlace';

const { height, width } = Dimensions.get('screen');
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 10,
          shadowColor: '#FFE5B4',
          backgroundColor: '#dde1e3',
          borderRadius: 20,
          height: height * 0.0680,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: 'center', alignItems: 'center',

              }}>
              <MaterialCommunityIcons
                name="home"
                size={focused ? 35 : 25}
                color={focused ? 'blue' : 'grey'}

              />
              <Text style={{ fontWeight: 'bold', color: focused ? 'blue' : 'grey' }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: 'center', alignItems: 'center',

              }}>
              <MaterialCommunityIcons
                name="star-circle"
                size={focused ? 35 : 25}
                color={focused ? 'blue' : 'grey'}

              />
              <Text style={{ fontWeight: 'bold', color: focused ? 'blue' : 'grey' }}>Favorites</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={Results}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: 'center', alignItems: 'center'
              }}>
              <MaterialCommunityIcons
                name="history"
                size={focused ? 35 : 25}
                color={focused ? 'blue' : 'grey'}
              />
              <Text style={{ fontWeight: 'bold', color: focused ? 'blue' : 'grey' }}>Results</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MyPlace"
        component={MyPlace}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: 'center', alignItems: 'center'
              }}>
              <MaterialCommunityIcons
                name="microsoft-xbox-controller-menu"
                size={focused ? 35 : 25}
                color={focused ? 'blue' : 'grey'}
              />
              <Text style={{ fontWeight: 'bold', color: focused ? 'blue' : 'grey' }}>Myplace</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;



