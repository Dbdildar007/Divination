import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, Keyboard, View, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from "react-native";
import Header from "../../components/Header";
import CheckBox from 'expo-checkbox';
import AppButton from "../../components/AppButton";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { RegisterFunctionApi } from '../../API/Api_call';
const { height, width } = Dimensions.get('screen')

const Register = ({ navigation }) => {

    const [ageflg, setageflg] = useState('');

    const [flg, setflg] = useState(false);
    const [errorflg, seterrorflg] = useState(false);
    const [ageerrorflg, setageerrorflg] = useState(false);
    const [number, setnumber] = useState();
    const [val, setval] = useState(0);
    const code = '+91'
    const [loading, setloading] = useState(false);

    //flash mesage function
    function handleflashmessage({ error, message }) {

        showMessage({
            message: error ? " Opps something wrong!" : "Check your phone plzzz.",
            description: error ? message : "We have sent otp at your given number.",
            icon: props => error ? <Image source={require("../../assets/cross.png")} {...props} /> : <Image source={require("../../assets/check.png")} {...props} />,
            type: error ? "danger" : "success",
            hideOnPress:true,
            duration:4000
        });
    }

    const Hanlefunc = async () => {
        if (number?.length == 10) {
            seterrorflg(false)
            setval(0)
            if (ageflg == true) {
                setloading(true);
                setageerrorflg(false)
               
                const ress = await RegisterFunctionApi(number);
                if (ress && ress.Response) {
                    navigation.navigate('OtpScreen', {number:number});
                } else {
                    setresponseerror(ress.result);
                    handleflashmessage({ error: true, message: ress.result });
                }
                setloading(false);
    
            } else {
                setageerrorflg(true)
                handleflashmessage({ error: true, message: "Please check out the age condition too." });
                //console.log('age issue', ageflg)
            }
        } else {
            seterrorflg(true)
            handleflashmessage({ error: true, message: "Please Enter a valid number to complete registration." });
            setval(1)
            //console.log('number error', number);
        }

    }

    return (
        <View style={{ flex: 1 }}>

            <FlashMessage />
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />



            <Header navigation={navigation} title='Register & Play' />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>

                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>


                    <View style={{ backgroundColor: '#FFFFF7', flex: 1, width: width, justifyContent: 'flex-start', alignItems: 'center' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.055, marginTop: height * 0.030, borderRadius: 12, borderWidth: val, borderColor: 'red' }}>
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


                        {errorflg ? <Text style={{ color: 'red', marginHorizontal: 10 }}>Please enter a valid number for OTP</Text> : <Text style={{ paddingTop: 5, marginHorizontal: 10 }}>You will receive an OTP at this number for the verification.</Text>}

                        <View style={{ flexDirection: 'row', marginTop: 8 }}>

                            <CheckBox
                                disabled={false}
                                value={ageflg}
                                color={ageerrorflg ? 'red' : 'green'}
                                onValueChange={(newValue) => setageflg(newValue)}
                            />

                            {ageerrorflg ? <Text style={{ color: 'red', fontWeight: 'bold', marginHorizontal: 8 }}>Click me too.</Text> : <Text style={{ paddingHorizontal: 8, fontWeight: 'bold', color: 'green' }}>I certify that I am above 18 years.</Text>}
                        </View>

                        <KeyboardAvoidingView behavior={10} style={{ flex: 1, backgroundColor: '#FFFFF7', width: width, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View style={{ borderWidth: 1, marginBottom: 5, borderColor: '#ebebe0' }}></View>


                            <View style={{ width: width * 0.8, marginHorizontal: width * 0.1 }}>
                                <AppButton onPress={Hanlefunc} title="Continue" />
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10, marginEnd: 8, marginTop: 10 }}>
                                <View

                                    style={{ alignItems: 'flex-start' }}>
                                    <Text style={{}}>Invited by a frined?</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('InviteLogin')}>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Enter Code</Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{ alignItems: 'flex-end' }}>
                                    <Text style={{}}>Already an user?</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={{ fontWeight: 'bold', paddingEnd: 7, color: 'black' }}>Log in</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>

            </TouchableWithoutFeedback >

        </View >
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


export default Register;



