import react, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IIcon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('screen');

const HistoryData = ({navigation}) => {

    const [flg, setflg] = useState();


    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 10, padding: 10, justifyContent: 'space-between', borderRadius: 13, width: width * 0.96, elevation: 10, shadowColor: 'grey' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('BetDetails')}> 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>date (time)</Text>
                    <Icon onPress={() => console.log('prrees')} name='dots-three-vertical' color='blue' size={18} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingEnd: 5 }}>
                    <Text style={{ fontWeight: 'bold' }}>Rate:</Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>1.94</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6 }}>
                    <Text style={{ fontWeight: 'bold' }}>Stake:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>210</Text>
                        <Text style={{ paddingStart: 3, fontWeight: 'bold', fontSize: 15, color: 'black' }}>₹</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6 }}>
                    {flg ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Winning:</Text>
                            <Text style={{ fontWeight: 'bold', color: '#11D234', fontSize: 15, paddingStart: 10 }}>210</Text>
                            <Text style={{ paddingStart: 3, fontWeight: 'bold', fontSize: 15, color: '#11D234' }}>₹</Text>
                        </View>
                        : <Text style={{ fontWeight: 'bold' }}>Status:</Text>}

                    {(flg == undefined) ? <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 3, paddingHorizontal: 10 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Live..</Text></View>
                        : flg ? <View style={{ flexDirection: 'row', alignItems: 'center' }}><IIcon name='checkmark-done-circle' color='#11D234' size={20} /><Text style={{ paddingStart: 3, color: '#11D234', fontWeight: 'bold' }}>Won</Text></View>

                            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='circle-with-minus' color='red' size={20} />
                                <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 15, paddingStart: 5, marginEnd: 2 }}>Lost</Text>

                            </View>}
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default HistoryData;