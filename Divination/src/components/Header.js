import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen');
const Header = ({navigation,title}) => {
   
    return (
            <View style={{flexDirection:'row',padding:5,height: height * 0.050,justifyContent:'flex-start',alignItems:'center',width: width, backgroundColor: "#0000ff"}}>
                <Icon onPress = {()=>navigation.goBack()} name = 'arrow-undo-sharp' color = 'white' size={30} style={{paddingStart:width*0.010}}/>
                <Text style={{marginStart:width*0.22,fontWeight:'bold',color:'white',fontSize:25}}>{title}</Text>
            </View>
      
    )
}
export default Header;