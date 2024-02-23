import react, { useState } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IIcon from 'react-native-vector-icons/Ionicons'
import Econ from 'react-native-vector-icons/Entypo'
const { height, width } = Dimensions.get('screen');
const BetDetails = ({ navigation }) => {

    const [flg, setflg] = useState();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEF9E7' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 10, backgroundColor: 'transparent' }}>
                <Icon onPress={() => navigation.goBack()} name='arrow-back' size={30} />
                <Text style={{ marginStart: width * 0.3, fontWeight: 'bold', fontSize: 22 }}>BetDetails</Text>
            </View>


            <View style={{
                elevation: 10,
                flexDirection: 'row', alignItems: 'center', paddingBottom: 20, margin: 10, marginTop: height * 0.020, padding: 10, backgroundColor: 'white', borderTopEndRadius: 10, borderTopStartRadius: 10
            }}>
                <View style={{
                    flex: 1,
                    borderWidth: 0,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>

                    <Text> Date and (time )</Text>
                    <Text style={{ paddingStart: width * 0.060, color: 'green', fontWeight: 'bold', fontSize: 20 }}>Congratulation:🍾🍾🍾</Text>

                </View>

            </View>

            <View style={{
                elevation: 10, borderWidth: 0.5, borderStyle: 'dashed', justifyContent: 'space-between',
                flexDirection: 'column', paddingBottom: 20, margin: 10, marginTop: height * 0.0, padding: 10, backgroundColor: 'white', borderRadius: 15
            }}>

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


                {flg ? <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6 }}>
                    <Text style={{ fontWeight: 'bold' }}>Winnings:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#11D234', fontSize: 15 }}>210</Text>
                        <Text style={{ paddingStart: 3, fontWeight: 'bold', fontSize: 15, color: '#11D234' }}>₹</Text>
                    </View>
                </View> : null}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, marginEnd: 4 }}>
                    <Text style={{ fontWeight: 'bold' }}>Status:</Text>

                    {(flg == undefined) ? <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 2,paddingHorizontal:8}}><Text style={{ color: 'white', fontWeight: 'bold' }}>Live..</Text></View>
                        : flg ? <View style={{ flexDirection: 'row', alignItems: 'center' }}><IIcon name='checkmark-done-circle' color='#11D234' size={20} /><Text style={{ paddingStart: 3, color: '#11D234', fontWeight: 'bold' }}>Won</Text></View>

                            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Econ name='circle-with-minus' color='red' size={20} />
                                <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 15, paddingStart: 5, marginEnd: 2 }}>Lost</Text>

                            </View>}
                </View>

            </View>





            <View style={{
                elevation: 10, borderWidth: 0.5, borderStyle: 'dashed', justifyContent: 'space-between', position: 'absolute', width: width * 0.953,
                flexDirection: 'column', paddingBottom: 10, margin: 10, marginTop: height * 0.330, padding: 10, backgroundColor: 'white', borderRadius: 15
            }}>

                <View style={{ flexDirection: 'row', paddingTop: 10, paddingStart: 10 }}>
                    <Icon name='sports-cricket' size={25} color='red' />

                    <Text style={{ paddingStart: 10, fontSize: 16, fontWeight: 'bold' }}>first team name</Text>
                    <Text style={{ paddingStart: 5 }}>vs</Text>

                    <Text style={{ paddingStart: 6, fontSize: 16, fontWeight: 'bold' }}>first team name</Text>
                </View>
                <View style={{ flexDirection: 'row', marginStart: width * 0.12 }}>
                    <Text>date</Text>
                    <Text style={{ paddingStart: 4 }}>(Time)</Text>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', color: 'black', fontSize: 15, paddingStart: 20 }}>first team name </Text>
                    </View>
                    <Image source={require('../assets/check.png')} style={{ height: height * 0.06, resizeMode: 'stretch', width: width * 0.131 }} />



                    <View style={{ flexDirection: 'row', padding: 6 }}>
                        <Text>90/2</Text>
                        <Text style={{ paddingHorizontal: 2, fontWeight: 'bold', color: 'black' }}>:</Text>
                        <Text>0/0</Text>
                    </View>


                    <Image source={require('../assets/check.png')} style={{ height: height * 0.06, width: width * 0.131, resizeMode: 'stretch' }} />
                    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', color: 'black', fontSize: 15, paddingEnd: 15 }}>second team name</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, marginEnd: 10, alignItems: 'center' }}>
                    <Text style={{ marginStart: 8 }}>Stake:</Text>
                    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginEnd: width * 0.020 }}>
                        <Text style={{ paddingHorizontal: 5, fontWeight: 'bold', fontSize: 14, paddingStart: 10 }}>Will zimbawe take more than 2 wickets in powerplay </Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>1.7</Text>
                </View>

                <View style={{ flexDirection: 'row', margin: 8, justifyContent: 'space-between', marginTop: 15 }}>
                    <Text>Status:</Text>

                    { (flg == undefined) ? <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 2,paddingHorizontal:8}}><Text style={{ color: 'white', fontWeight: 'bold' }}>Live..</Text></View>
                    :flg ? <Text style={{ paddingStart: 3, color: '#11D234', fontWeight: 'bold' }}>Won</Text>
                        : <Text style={{ paddingStart: 3, color: 'red', fontWeight: 'bold' }}>Lost</Text>}
                </View>


            </View>

        </SafeAreaView>
    )
}



export default BetDetails;