import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import   MyTabs  from '../screen/BottomTabs'
import HomeScreen from '../screen/HomeScreen';
import Contest from '../screen/Contest';
import MainModal from '../components/MainModal';
import BetDetails from '../screen/BetDetails';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Tabs">

      <Stack.Screen name="Tabs" options={{headerShown:false}} component={MyTabs} />
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Contest" options={{headerShown:false}} component={Contest} />
      <Stack.Screen name="MainModal" options={{headerShown:false}} component={MainModal} />
      <Stack.Screen name="BetDetails" options={{headerShown:false}} component={BetDetails} />

    </Stack.Navigator>
  );
}
export default HomeStack;
