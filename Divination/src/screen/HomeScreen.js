import React, { useContext, useState,useRef } from "react";
import { View, Text, Dimensions, FlatList } from 'react-native'
import { AuthContext } from "../context/AuthContext";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Category from '../components/Categorydata'
import ContestData from "../components/ContestData";
import MainModal from "../components/MainModal";
const { height, width } = Dimensions.get('screen');
const HomeScreen = () => {

  const childrefM = useRef(null);
  const { userData, setuserData } = useContext(AuthContext);

  const [data, setdata] = useState([1, 2,3,4,5,6,7,8]);
  return (
    <View style={{ flex: 1, backgroundColor: '#dde1e3', alignItems: 'center' }}>
      <Header balance={userData.Response.bonus} />
      <View style={{ backgroundColor: '#dde1e3', height: height * 0.13, width: width, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={{ padding: 5 }}></View>}
          data={data}
          renderItem={(item) => <Category item={item} />}
          keyExtractor={(item, index) => index}
        />

      </View>
    
     
        <View>
          <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item,index) => index}
          renderItem={(item) =><ContestData childrefM ={childrefM}/>}
          ListFooterComponent={<View style={{height:height*0.30}}></View>}
          />
       
  
        </View>
      <MainModal childrefM ={childrefM}/>
      
    </View>
    
  )
}


const Header = ({ balance }) => {
  return (
    <View style={{ backgroundColor: 'white', paddingVertical: 15, elevation: 10, shadowColor: 'grey', width: width, paddingHorizontal: 12, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      
      <View style={{ backgroundColor: '#dde1e3', padding: 5, flexDirection: 'row', borderRadius: 30, flexWrap: 'nowrap' }}>
        <Icon name='plus-circle' size={22} color='#32cd32' />
        <Text style={{ paddingHorizontal: 5, fontWeight: 'bold', justifyContent: 'center', fontSize: 18, color: 'black' }}>{balance}</Text>
        <Text style={{ fontWeight: 'bold', justifyContent: 'center', fontSize: 18, paddingEnd: 3 }}>₹</Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 23, fontStyle: 'italic', color: 'black' }}>Davination</Text>
      <Icon name='search' size={23} color='blue' />
    </View>
  )
}
export default HomeScreen;


