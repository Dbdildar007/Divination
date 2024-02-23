import react from 'react'
import { View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const UserList = () => {
    return (
        <View style ={{flexDirection:'row',backgroundColor:'white',padding:10,borderRadius:10,elevation:10,shadowColor:'grey',justifyContent:'space-between',alignItems:'center',marginHorizontal:14,marginTop:5}}> 
           
           <View style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
          <Icon name = 'person-circle-outline' size = {25}/>
           <Text style={{paddingStart:5,fontSize:17}}>username</Text>
           </View>
          

            <View style={{flexDirection:"row",}}>
            <Text style={{fontWeight:'bold',color:"blue"}}>Yes</Text> 
            <Text style={{paddingStart:20,fontWeight:'bold',color:'black'}}>553</Text>
            </View>
           
        </View>
    )
}
export default UserList;