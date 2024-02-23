import React from "react";
import Header from "../../components/Header";
import { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppButton from "../../components/AppButton";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { LoginFunctionApi } from '../../API/Api_call';
import Spinner from 'react-native-loading-spinner-overlay';
const { height, width } = Dimensions.get('screen');

const Login = ({ navigation }) => {
    const [flg, setflg] = useState(false);
    const [errorflg, seterrorflg] = useState(false);
    const [number, setnumber] = useState();
    const [val, setval] = useState(0);
    const code = '+91'
    const [loading, setloading] = useState(false);

    function handleflashmessage({ error, message }) {
        showMessage({
            message: error ? " Opps Something went wrong!" : "Check your phone plzzz.",
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
            setloading(true);
          
            const ress = await LoginFunctionApi(number);
            console.log("Response", ress);
            if(ress && ress.Response){
               // console.log(ress.Response);
               navigation.navigate('OtpScreen',{userinfo:ress.Response});
            }else{
                handleflashmessage({ error: true, message:ress.result});
            }
            setloading(false);
            
        } else {
            seterrorflg(true)
            handleflashmessage({ error: true, message: "Please Enter a valid number to complete log in process." });
            setval(1)

        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex: 1 }}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <FlashMessage />
                <Header navigation={navigation} title='Welcome Back!' />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.040 }}>
                    <Image source={require('../../assets/login.png')} style={{ height: height * 0.2, width: width * 0.4 }} />
                </View>


                <KeyboardAvoidingView
                    behavior={1000}
                    style={{ flex: 1, backgroundColor: '#FFFFF7', justifyContent: 'flex-start', marginTop: height * 0.030, borderTopRightRadius: 40, borderTopLeftRadius: 40, elevation: 10 }}>

                    <View style={{ elevation: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.055, marginTop: 20, borderRadius: 10, borderWidth: val, borderColor: 'red', marginStart: width * 0.06, marginEnd: width * 0.06 }}>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {errorflg ? <Text style={{ color: 'red' }}>Please Enter A valid number.</Text> : null}
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>------- <View style={{ backgroundColor: '#ebebe0', borderRadius: 20, marginTop: 5 }}><Text style={{ fontWeight: 'bold', fontSize: 15 }}>OR</Text></View> -------</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginStart: 30, marginEnd: 30 }}>

                        <View style={{ alignItems: 'flex-start' }}>
                            <Icon.Button
                                name="facebook"
                                backgroundColor="#2737e9"
                                onPress={() => console.log('fb')}
                            >Login with Facebook
                            </Icon.Button>
                        </View>
                        <Icon.Button
                            name="google"
                            backgroundColor="#0be22d"
                            onPress={() => console.log('google')}
                        >Login with Goolge
                        </Icon.Button>
                    </View>

                    <View style={{ marginTop: 30 }}>

                        <View style={{ width: width * 0.8, marginHorizontal: width * 0.1 }}>
                            <AppButton title='Next' onPress={Hanlefunc} />
                        </View>

                        <View style={{ borderWidth: 0.5, borderBottomColor: '#ebebe0', marginTop: 20 }}></View>
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Not a member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>

    );
};


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
export default Login;