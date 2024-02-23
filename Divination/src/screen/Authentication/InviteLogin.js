import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Keyboard, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Image } from "react-native";
import Eicon from 'react-native-vector-icons/Entypo'
import AppButton from "../../components/AppButton";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';
import {InviteRegistrationApi} from '../../API/Api_call';
const { height, width } = Dimensions.get('screen');

const CodeScreen = ({ navigation }) => {

    const [flg, setflg] = useState(false);
    const [errorflg, seterrorflg] = useState(false);
    const [number, setnumber] = useState();
    const [val, setval] = useState(0);
    const [val2, setval2] = useState(0);
    const [Icode, setIcode] = useState();
    const code = '+91'
    const [loading, setloading] = useState(false);

    //flash mesage function
    function handleflashmessage({ error, message }) {
        showMessage({
            message: error ? " Opps Something went wrong!" : "Check your phone plzzz.",
            description: error ? message : "We have sent otp at your given number.",
            icon: props => error ? <Image source={require("../../assets/cross.png")} {...props} /> : <Image source={require("../../assets/check.png")} {...props} />,
            type: error ? "danger" : "success",
            hideOnPress: true,
            duration: 4000
        });
    }


    const Hanlefunc = async() => {
        if (Icode?.length == 6) {
            setval2(0)
            if (number?.length == 10) {
                seterrorflg(false)
                setval(0)
                setloading(true);
            
                const ress = await InviteRegistrationApi({number,Icode});
                console.log("ress",ress);
                if(ress && ress.Response){
                    navigation.navigate('OtpScreen', {number:number,Icode:Icode});
                }else{
                handleflashmessage({ error: true, message: ress.result});
                }
                setloading(false);
                
            } else {
                seterrorflg(true)
                handleflashmessage({error: true, message: "Please Enter a valid number to complete registration." });
                setval(1)
                //console.log('numbr issue')
            }
            
        } else {
            setval2(1)
            handleflashmessage({ error: true, message: "The invitation code length sould be six." });
            //console.log('code wla')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Header navigation={navigation} />
               
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.01 }}>
                    <Image source={require('../../assets/add.png')} style={{ height: height * 0.15, width: width * 0.3 }} />
                </View>
                
                <FlashMessage />
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />

                <View style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40, elevation: 10, marginTop: height * 0.010, backgroundColor: '#FFFFF7', flex: 1, width: width, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: val2, borderColor: 'red' }}>
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.047, marginTop: 7, fontSize: 18, marginStart: 7 }}
                            blurOnSubmit={true}
                            value={Icode}
                            maxLength={6}
                            onChangeText={(vL) => setIcode(vL)}
                            placeholder='Enter Invite Code.'
                            autoCapitalize='characters'
                            placeholderTextColor={'grey'}
                        />
                        {Icode?.length > 0 ? <TouchableOpacity onPress={() => setIcode()}><Eicon name='squared-cross' size={20} /></TouchableOpacity> : null}
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.047, marginTop: 18, borderRadius: 10, borderWidth: val, borderColor: 'red' }}>
                        {flg ? <Text style={{ paddingTop: 9, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{code}</Text> : null}
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.050, marginTop: 10, fontSize: 18 }}
                            onFocus={() => setflg(true)}
                            blurOnSubmit={true}
                            value={number}
                            maxLength={10}
                            onChangeText={(vL) => setnumber(vL)}
                            placeholder={flg ? null : 'Enter Mobile Number'}
                            keyboardType="numeric"
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    {errorflg ? <Text style={{ color: 'red' }}>Please enter a valid number for OTP</Text> : <Text style={{ paddingTop: 5 }}>You will receive an OTP at this number for the verification.</Text>}

                    <KeyboardAvoidingView behavior={10} style={{ flex: 1, backgroundColor: '#FFFFF7', width: width, justifyContent: 'flex-end', marginBottom: 20 }}>
                        <View style={{ borderWidth: 1, marginBottom: 8, borderColor: '#ebebe0' }}></View>

                        <View style={{ width: width * 0.8, marginHorizontal: width * 0.1 }}>
                            <AppButton title='Continue' onPress={Hanlefunc} />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: 10, marginEnd: 8, marginTop: 15 }}>

                            <Text style={{}}>Already an user?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ fontWeight: 'bold', paddingEnd: 7, color: 'black', fontSize: 18 }}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>

        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default CodeScreen;