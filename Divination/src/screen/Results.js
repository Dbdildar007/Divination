import react, { useState } from 'react'
import { View, Text, Dimensions, Pressable, FlatList } from 'react-native'
import AIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HistoryData from '../components/HistoryData'

const { height, width } = Dimensions.get('screen');
const Results = ({navigation}) => {

    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#E1E3E8' }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 25 }}>Bet History</Text>

            <View style={{ backgroundColor: 'white',elevation:10, flexDirection: 'row', padding: 10, width: width * 0.96, marginTop: 20, justifyContent: 'space-between', alignItems: 'center', borderRadius: 13 }}>
                <View style={{ flexDirection: 'row' }}>
                    <AIcon onPress={() => console.log('waalete')} name='plus-circle' size={40} color='#32cd32' />
                    <View style={{ marginStart: 8 }}>
                        <Text style={{ fontSize: 17 }}>Balance:</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>53.3 </Text>
                            <Text style={{ paddingStart: 1, fontSize: 18, fontWeight: 'bold' }}>₹</Text>
                        </View>
                    </View>
                </View>
                <Pressable onPress={() => console.log('wallet')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'blue' }}>Top up account </Text>
                    <Icon name='arrow-forward-ios' size={20} color='blue' />
                </Pressable>
            </View>
            
            <FlatList
                style={{ marginTop: 10, backgroundColor: 'transparent' }}
                ListFooterComponent={<View style={{ marginBottom: height * 0.090 }}></View>}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={key => key}
                renderItem={(item) => <HistoryData navigation  ={navigation}/>}
            />


        </View>
    )
}
export default Results;