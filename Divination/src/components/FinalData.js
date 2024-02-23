import React, { useState, useRef } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('screen');

const FinalData = ({ navigation,focusInput,childref,item}) => {

     

    return (
        <View key={item} style={{ flex: 1, backgroundColor: 'white', marginTop: 10, elevation: 5, padding: 10, borderRadius: 10, elevation: 10, width: width * 0.96, marginHorizontal: width * 0.02 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', fontStyle: 'italic', paddingStart: 4 }}>Headin.</Text>

                <TouchableOpacity onPress={()=>focusInput()} style={{ flexDirection: 'row' }}>
                    <Icon name='person' size={17} />
                    <Text style={{ paddingStart: 3, paddingEnd: 3 }} >122</Text>
                    <Text>Bettors</Text>
                    <Icon name='chevron-forward-outline' size={17} style={{ paddingTop: 2 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/image.jpg')} style={{ height: height * 0.090, width: width * 0.18, borderRadius: 18 }} />
                </View>

                <View style={{ marginEnd: width * 0.2, }}>
                    <Text style={{ flexWrap: 'nowrap', padding: 10, fontSize: 16 }}>
                        Zimbawe to take 2 or more wickets at the end of 10 overs vs Sri lanks?
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginStart: width * 0.3, marginEnd: width * 0.1, marginBottom: 4 }}>
                <TouchableOpacity onPress={() =>childref.current.focusInput()} style={{ justifyContent: 'space-between', padding: 10, shadowColor: 'blue', flexDirection: 'row', borderRadius: 7, elevation: 5, backgroundColor: '#c4d9ef' }}>
                    <Text style={{ fontWeight: 'bold', color: 'blue' }}>Yes</Text>
                    <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'blue' }}>2.33</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>childref.current.focusInput()} style={{ padding: 10, shadowColor: 'red', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#f0d8e5', borderRadius: 7, elevation: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: 'red' }}>No</Text>
                    <Text style={{ paddingStart: 10, fontWeight: 'bold', fontSize: 15, color: 'red' }}>2.33</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default FinalData;