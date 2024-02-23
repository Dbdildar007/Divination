import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screen/Authentication/Welcome';
import Register from '../screen/Authentication/Register';
import Login from '../screen/Authentication/Login';
import InviteLogin from '../screen/Authentication/InviteLogin';
import OtpScreen from '../screen/Authentication/OtpScreen';
import Form from '../screen/Authentication/Form';
import HomeScreen from '../screen/BottomTabs';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={Welcome} />
      <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <Stack.Screen name="InviteLogin" options={{headerShown:false}} component={InviteLogin} />
      <Stack.Screen name="OtpScreen" options={{headerShown:false}} component={OtpScreen} />
      <Stack.Screen name="Form" options={{headerShown:false}} component={Form} />
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;
