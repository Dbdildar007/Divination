import react from 'react'
import {View,Text,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Categorydata = ({item})=>{
    return(
        <View style={{flex:1,backgroundColor:'#dde1e3'}}>
            <TouchableOpacity 
            onPress={()=>console.log(item.index)}
            style ={{alignItems:'center',elevation:8,borderRadius:15,shadowColor:'grey',padding:15,backgroundColor:'white',flexWrap:'nowrap',margin:5,justifyContent:'center'}}>
            <Icon name ='ring' size ={40} color ='red'/>
            <Text style={{fontWeight:'bold'}}>Cricket</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Categorydata;