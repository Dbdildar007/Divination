import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Anicon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get('screen');

const ContestData = ({childrefM}) => {

   
    const navigation = useNavigation();
   
    const [days, setdays] = useState('');
    const [hours, sethours] = useState('');
    const [minutes, setminuts] = useState('');
    const [seconds, setseconds] = useState('');


    const date = new Date("2024-01-06T04:50:37.454Z");
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });

    let finaldate = formattedDate.slice(0, 5)

    const time = new Date("2024-01-06T04:50:37.454Z").toLocaleTimeString();
    let finaltime = time.slice(0, 4);
    let ampm = time.slice(7,)
    useEffect(() => {
        // Set the date to count down to
        const countDownDate = new Date("2024-01-03T03:23:37.454Z").getTime();

        const interval = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();
            // Calculate the time remaining between now and the countdown date
            const distance = countDownDate - now;
            // Calculate days, hours, minutes, and seconds remaining
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Format the countdown string
            setdays(days);
            sethours(hours);
            setminuts(minutes);
            setseconds(seconds);
            //const countdownStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            // Update the state with the countdown string

            // If the countdown is finished, clear the interval
            if (distance < 0) {
                clearInterval(interval);
                console.log('expired');
            }
        }, 1000);
        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, []);


    const [notification, setnotification] = useState(false);
    const [favorite, setfavorite] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Contest')} style={{ flex: 1, width: width * 0.98, backgroundColor: 'white', justifyContent: 'center', marginHorizontal: width * 0.01, marginVertical: 4, borderRadius: 10, elevation: 10, shadowColor: 'grey' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Icon name='cricket' size={25} style={{ paddingEnd: 2 }} />
                        <Text> League name will be here.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingEnd: 10 }}>
                        <Anicon onPress={() => setnotification(!notification)} name={notification ? 'notifications-active' : 'notifications-none'} size={25} color="#0093af" style={{ paddingEnd: 4 }} />
                        <Icon onPress={() => setfavorite(!favorite)} name={favorite ? 'star-check' : 'star-check-outline'} color="#0093af" size={26} />
                    </View>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', color: 'black', fontSize: 17, paddingStart: 20 }}>first team name </Text>
                    </View>
                    <Image source={require('../assets/check.png')} style={{ height: height * 0.06, resizeMode: 'stretch', width: width * 0.131 }} />



                    <View style={{ flexDirection: 'row', padding: 6 }}>
                        <Text>90/2</Text>
                        <Text style={{ paddingHorizontal: 2, fontWeight: 'bold', color: 'black' }}>:</Text>
                        <Text>0/0</Text>
                    </View>


                    <Image source={require('../assets/check.png')} style={{ height: height * 0.06, width: width * 0.131, resizeMode: 'stretch' }} />
                    <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', color: 'black', fontSize: 17, paddingEnd: 15 }}>second team name</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>T20</Text>
                </View>


                <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>

                    {(days == 1) ? <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'red', fontStyle: 'italic' }}>Tomorrow</Text>
                    </View>
                        : (days > 1) ? <View style={{}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'red', fontStyle: 'italic' }}>{finaldate}</Text>
                        </View>

                            : (hours > 0) ? <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                                <View style={{ backgroundColor: 'red', borderRadius: 5, padding: 3, marginEnd: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{hours}</Text>
                                    <Text style={{ paddingStart: 3, fontWeight: 'bold', color: 'black', paddingEnd: 2 }}>H</Text>
                                </View>
                                <View style={{ backgroundColor: 'red', borderRadius: 5, padding: 3, marginEnd: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{minutes}</Text>
                                    <Text style={{ paddingStart: 2, fontWeight: 'bold', color: 'black', paddingEnd: 2 }}>M</Text>
                                </View>
                            </View>
                                : (minutes > 0) ?
                                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                                        <View style={{ backgroundColor: 'red', borderRadius: 5, padding: 3, marginEnd: 5, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{minutes}</Text>
                                            <Text style={{ paddingStart: 3, fontWeight: 'bold', color: 'black', paddingEnd: 2 }}>M</Text>
                                        </View>
                                        <View style={{ backgroundColor: 'red', borderRadius: 5, padding: 3, marginEnd: 5, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{seconds}</Text>
                                            <Text style={{ paddingStart: 2, fontWeight: 'bold', color: 'black', paddingEnd: 2 }}>S</Text>
                                        </View>
                                    </View>
                                    : (seconds > 0) ? <View style={{ backgroundColor: 'red', borderRadius: 5, padding: 3, marginEnd: 5, flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{seconds}</Text>
                                        <Text style={{ paddingStart: 2, fontWeight: 'bold', color: 'black', paddingEnd: 2 }}>S</Text>
                                    </View> : null}

                </View>

                <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
                    <Text style={{ fontWeight: 'bold' }}>{finaldate}</Text>
                    <Text style={{ paddingStart: 4, fontWeight: 'bold' }}>{finaltime}</Text>
                    <Text style={{ fontWeight: "bold" }}>{ampm}</Text>

                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 5 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Team Wins</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>

                    <TouchableOpacity onPress={() =>childrefM.current.focusMInput()} style={{ padding: 10, flexDirection: 'row', backgroundColor: '#dde1e3', borderRadius: 7, elevation: 10, marginEnd: width * 0.3 }}>
                        <Text>Team1</Text>
                        <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'green' }}>2.33</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>childrefM.current.focusMInput()} style={{ padding: 10, flexDirection: 'row', backgroundColor: '#dde1e3', borderRadius: 7, elevation: 10 }}>
                        <Text>Team2</Text>
                        <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'red' }}>2.33</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default ContestData;