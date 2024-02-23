import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./src/Navigation/AuthStack";
import HomeStack from "./src/Navigation/HomeStack";
import Services from "./src/shared/Services";
import { AuthContext } from './src/context/AuthContext';
import OtpScreen from "./src/screen/Authentication/OtpScreen";

const App = () => {

  const [userData, setuserData] = useState();

  //console.log(userData, 'userdata from app');
  useEffect(() => {
    Services.getUserAuth().then(resp => {

      if (resp) {
        //console.log('testing',resp.Response.amount);
        setuserData(resp)
      }
      else {
        //console.log('eeerrrrrooorr')
        setuserData(null)
      }
    })
  }, [])


  return (
    <View style={{ flex: 1 }}>

      <NavigationContainer independent={true}>
        <AuthContext.Provider value={{ userData, setuserData }}>

          {userData ?
            <HomeStack /> : <AuthStack />}

        </AuthContext.Provider>
      </NavigationContainer>

    </View>
  )
}
export default App;



