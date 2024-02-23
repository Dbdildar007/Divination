import react, { useState, useRef } from 'react'
import { Text, View, ImageBackground, StyleSheet, Pressable, TouchableOpacity, Dimensions, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign'
import Micon from 'react-native-vector-icons/MaterialIcons'
import FinalData from '../components/FinalData';
import Modal from 'react-native-modalbox'
import UserList from '../components/UserList';
import JoinModel from '../components/JoinModel';
const { width, height } = Dimensions.get('screen');

const Contest = ({ navigation }) => {

    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
    const [indexCheck, setIndexCheck] = useState("0")

    const filterData = [{ name: "ALL", id: "0" },
    { name: "My Contest", id: "1" },
    { name: "Match", id: "2" },
    { name: "Over", id: "3" },
    { name: "Statics", id: "4" },
    { name: "Runs", id: "5" },
    { name: "Team", id: "6" },
    ];
    const childref = useRef(null);

    const refdata = useRef(null);

    const focusInput = () => {
        refdata.current.open();

    }

   
    return (
        <View style={{ flex: 1, backgroundColor: '#f2f3f4' }}>
            <SafeAreaView>
                <StatusBar hidden={true} />

                <ImageBackground style={{ height: height * 0.3, width: width }} source={require('../assets/image.jpg')}>
                    <View style={{ padding: 13, marginTop: height * 0.0170, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Icon onPress={() => navigation.goBack()} name='arrowleft' color='white' size={30} />
                        <Text style={{ color: 'white', paddingStart: width * 0.1, fontSize: 16 }}>League name will be here.</Text>

                    </View>

                </ImageBackground>


                <View style={{ borderColor: 'grey', borderWidth: 0.5, height: height * 0.2, width: width * 0.95, justifyContent: 'flex-start', backgroundColor: ' rgba(50,50,200,0.6)', position: 'absolute', marginTop: height * 0.080, marginHorizontal: width * 0.025, borderRadius: 20 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginTop: 5, color: 'white' }}>T20</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap' }}>
                            <Image source={require('../assets/check.png')} style={{ height: height * 0.04600, width: width * 0.1 }} />
                            <Text style={{ paddingStart: 6, color: 'white' }}>First team name will be here</Text>
                        </View>
                        <View style={{ height: height * 0.070, borderWidth: 1, borderColor: '#5FC0C3' }}></View>
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingEnd: 10 }}>100/4</Text>
                    </View>

                    <View style={{ width: width * 0.9, marginHorizontal: width * 0.025, marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: '#5FC0C3' }}></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap' }}>
                            <Image source={require('../assets/check.png')} style={{ height: height * 0.0460, width: width * 0.1 }} />
                            <Text style={{ paddingStart: 6, color: 'white' }}>second team name will be here</Text>
                        </View>
                        <View style={{ height: height * 0.070, borderWidth: 1, borderColor: '#5FC0C3' }}></View>
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingEnd: 10 }}>100/4</Text>
                    </View>

                </View>


                <View>
                    <FlatList
                        horizontal={true}
                        style={{ backgroundColor: '#f2f3f4', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setIndexCheck(item.id) }}
                            >
                                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>

                                    <View>
                                        <Text style={indexCheck === item.id ? { ...styles.smallCardTextSected } :
                                            { ...styles.smallCardText }}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                {(indexCheck == 0) ?
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View
                            style={{ backgroundColor: 'white', elevation: 10, shadowColor: 'black', padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Team Wins</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 25, paddingHorizontal: 10 }}>

                                <TouchableOpacity onPress={() =>childref.current.focusInput()} style={{ justifyContent: 'space-between', padding: 10, flexDirection: 'row', backgroundColor: '#dde1e3', borderRadius: 7, elevation: 0, width: width * 0.4 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Team1</Text>
                                    <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'green' }}>2.33</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() =>childref.current.focusInput()} style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#dde1e3', borderRadius: 7, elevation: 0, width: width * 0.4 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Team2</Text>
                                    <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'green' }}>2.33</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {
                            data.map((item) => <FinalData item ={item} navigation={navigation} focusInput={focusInput} childref = {childref} />)
                        }

                        <View style={{ width: width, height: height * 0.38, marginTop: 10 }}></View>
                    </ScrollView> : (indexCheck == 1) ?

                        <Text>{indexCheck}</Text>
                        : null}





                <Modal style={{ flex: 1, backgroundColor: '#CCEBEF', borderTopRightRadius: 20, borderTopLeftRadius: 20, marginTop: height * 0.030 }} backdrop={false} position={"top"} ref={refdata}>
                    <View style={{ alignItems: 'center' }}>
                        <Micon name='keyboard-arrow-down' size={30} />
                    </View>

                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>Users</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>Amount</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={data}
                            keyExtractor={(key) => key}
                            renderItem={(item) => <UserList />}
                        />
                    </View>

                </Modal>
                
                <JoinModel childref = {childref} />
            </SafeAreaView>


        </View>
    )
}



const styles = StyleSheet.create({


    smallCard: {
        borderRadius: 10,
        backgroundColor: '#dde1e3',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        margin: 10,
    },

    smallCardSelected: {
        borderRadius: 10,
        backgroundColor: '#172064',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        margin: 10,
        shadowColor: 'black'

    },

    smallCardTextSected: {
        fontWeight: "bold",
        color: 'white',
        fontStyle: 'italic'
    },

    smallCardText: {
        fontWeight: "bold",
        color: 'black'
    }

})

export default Contest;