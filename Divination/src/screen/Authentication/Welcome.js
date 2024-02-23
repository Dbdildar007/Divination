import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Slideshow from "react-native-image-slider-show";
import { LinearGradient } from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AppButton from "../../components/AppButton";

const { height, width } = Dimensions.get('screen');
function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#FFFFF7', height: height }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', marginTop: 10 }}>DIVINATION</Text>
            </View>

            <View style={{ marginTop: height * 0.05 }}>
                <ImageSlider />
            </View>
            <View style={{ marginTop: height * 0.1, width: width * 0.8, marginHorizontal: width * 0.1 }}>
                <AppButton title="Register" onPress={()=>navigation.navigate('Register')}/>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 15, marginEnd: 15, marginTop: height * 0.07 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InviteLogin')}
                    style={{ alignItems: 'flex-start' }}>
                    <Text style={{color:'grey'}}>Invite by a frined?</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Enter Code</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: 'grey' }}>Already an user?</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', paddingEnd: 7 }}>Log in</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}


const dataSource = [
    {
        title: 'Welcome to Conqueror',
        caption: 'Ready to start winning money just by killing  swap left to learn about this app',
        url:
            "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
    },
    {
        title: 'Select A Match',
        caption: 'Choose a upcoming match that u want to play.',
        url:
            "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"
    },
    {
        title: 'Join A contest',
        caption: 'Compete with other player to get big rewards',
        url:
            "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg"
    },
    {
        title: 'Make a Team',
        caption: 'Create your Team using pubg id',
        url:
            "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg"
    }
];

const ImageSlider = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const toggle = setInterval(() => {
            setPosition(position === dataSource.length - 1 ? 0 : position + 1);
        }, 2000);

        return () => clearInterval(toggle);
    });

    return (
        <View >

            <Slideshow position={position} dataSource={dataSource}
                arrowSize={0}
                height={height * 0.55}
                indicatorSize={0}
                titleStyle={{ color: 'white', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}
                captionStyle={{ alignSelf: 'center', fontSize: 17, color: 'red', opacity: 0.5, justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}
            />


        </View>

    );
};



export default Welcome;
