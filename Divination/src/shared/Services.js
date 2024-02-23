import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserAuth=async(value)=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value))
    console.log("asynch setvalue:",value);
}

const getUserAuth=async()=>{
   const value=await AsyncStorage.getItem('userData');
   return JSON.parse(value)
}

const Logout=()=>{
    AsyncStorage.clear()
    console.log('loged out')
}


//set user status


export default{
    setUserAuth,
    getUserAuth,
    Logout,
}