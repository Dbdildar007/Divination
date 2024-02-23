import react, { useContext,useRef } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IIcon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modalbox';
import { AuthContext } from "../context/AuthContext";
const { height, width } = Dimensions.get('screen');
const MyPlace = () => {

    const { userData, setuserData } = useContext(AuthContext);
    const refdata = useRef(null);

    console.log(userData)
    return (
        <View style={{ flex: 1 }}>

            <Modal style={{ padding:10,height:height*0.15,width:width*0.55,borderRadius:20,elevation:10,alignItems:'center'}} position={"center"} ref={refdata} >
                <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Wallet Details</Text>
                
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between'}}>
                    <Text>Bonus:</Text>
                    <Text style={{paddingStart:20,fontWeight:'bold',color:'black'}}>{userData.Response.bonus}</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text>Withdrable:</Text>
                    <Text style={{paddingStart:10,fontWeight:'bold',color:'black'}}>{userData.Response.amount}</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Total:</Text>
                    <Text style={{paddingStart:30,fontWeight:'bold',color:'black'}}>{userData.Response.amount + userData.Response.bonus}</Text>
                </View>
            </Modal>


            <View style={{ alignItems: 'center' }}>
                <View style={{
                    backgroundColor: '#162A5D', marginTop: 10, justifyContent: 'center', alignItems: 'center', height: height * 0.2
                    , width: width * 0.96, borderRadius: 20, elevation: 10
                }}>
                    <View style={{
                        backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: height * 0.19
                        , width: width * 0.94, borderRadius: 20
                    }}>

                        <TouchableOpacity onPress={() => refdata.current.open()} style={{
                            backgroundColor: '#1050F5', justifyContent: 'center', alignItems: 'center', height: height * 0.18
                            , width: width * 0.92, elevation: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomEndRadius: 150, borderTopRightRadius: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', fontStyle: 'italic' }}>{userData.Response.bonus}</Text>
                                <Text style={{ paddingStart: 7, fontSize: 30, fontWeight: 'bold', fontStyle: 'italic', color: 'white' }}>₹</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>


                <TouchableOpacity onPress={() => console.log('wallet')} style={{
                    right: 15, top: 135
                    , backgroundColor: '#1050F5', shadowColor: 'black', position: 'absolute', elevation: 10, padding: 10, paddingHorizontal: 10, borderRadius: 150
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', fontStyle: 'italic' }}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 13, marginTop: height * 0.030 }}>
                <Icon name='person-pin' size={40} color={'blue'} />
                <Text style={{ color: 'blue', paddingStart: 3, fontWeight: 'bold' }}>{userData.Response.firstname}</Text>
                <Text style={{ color: 'blue', paddingStart: 3, fontWeight: 'bold' }}>{userData.Response.lastname}</Text>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <Icon name='person-add-alt' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>Refer & Earn </Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <Icon name='attach-money' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>Withdraw</Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <Icon name='headphones' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>Customer support</Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <IIcon name='game-controller-outline' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>How to Play</Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <Icon name='policy' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>Rules & Regulation</Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 10, padding: 8, borderTopRightRadius: 50, borderBottomLeftRadius: 50, alignItems: 'center', marginHorizontal: 13, paddingHorizontal: 15, marginTop: height * 0.010, backgroundColor: 'blue' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingStart: 8 }}>
                    <Icon name='info' size={30} color={'white'} />
                    <Text style={{ color: 'white', paddingStart: 5, fontWeight: 'bold', fontSize: 17 }}>About us</Text>
                </View>
                <Icon name='arrow-forward-ios' size={25} color='white' />
            </TouchableOpacity>

            <View>

            </View>

        </View>
    )
}
export default MyPlace;