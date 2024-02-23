import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useRef, useState, useEffect,useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Image,

} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Spinner from 'react-native-loading-spinner-overlay';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { OTPVerifyApi } from '../../API/Api_call';
import { AuthContext } from '../../context/AuthContext';
import Services from '../../shared/Services';

const { height, width } = Dimensions.get('screen');

const OtpScreen = ({ navigation }) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    const [flg, setflg] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState('');
    const route = useRoute();
    const { number, Icode, userinfo } = route.params;

    
    const { userData, setuserData } = useContext(AuthContext);
   
        const startTimer = () => {
            timer = setTimeout(() => {
                if (timeLeft <= 0) {
                    clearTimeout(timer);
                    return false;
                }
                setTimeLeft(timeLeft - 1);
            }, 1000)
        }
    
        useEffect(() => {
    
            startTimer();
            return () => clearTimeout(timer);
        },);
    
        const start = () => {
            setTimeLeft(120);
            clearTimeout(timer);
            startTimer();
        }
    
/*
          flash mesage function
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

    */


    const HnadleFunc = async () => {
        if ((otp[1] + otp[2] + otp[3] + otp[4]).length == 4) {
            setflg(false);
            seterror(null);
            const ottp = (otp[1] + otp[2] + otp[3] + otp[4]);
            setloading(true);
            const ress = await OTPVerifyApi({ ottp });
           // console.log("ress",ress.Response);
            if (ress && ress.Response) {
                if (userinfo != undefined || userinfo != null) {
                    //save the userinfo for contex 
                    //navigation.navigate('HomeScreen');
                    setuserData(ress);
                    await Services.setUserAuth(ress);
                } else {
                    //console.log('form',userinfo);
                    navigation.navigate('Form', {number: number,inviteCode:Icode});
                }
            } else {
                seterror(ress.result);
            }
            setflg(false)
            setloading(false);
            // 
        } else {
           
            setflg(true);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#FFFFF7', justifyContent: 'center' }}>
               
          
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.0240 }}>
                    <Image source={require('../../assets/email.png')} style={{ height: height * 0.1, width: width * 0.2 }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.020, marginHorizontal: 10 }}>

                    <Text style={{
                        fontSize: 17,
                        padding: 10
                    }}>
                        Enter the OTP number that you got recently at
                        <Text style={{ fontWeight: 'bold', color: 'black' }}> {number}
                        </Text> mobile number
                    </Text>
                </View>


                <View style={styles.otpContainer}>
                    <View style={[flg ? styles.otpBoxerror : styles.otpBox]}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 1: text });
                                text && secondInput.current.focus();
                            }}
                        />
                    </View>

                    <View style={[flg ? styles.otpBoxerror : styles.otpBox]}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={secondInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? thirdInput.current.focus() : firstInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={[flg ? styles.otpBoxerror : styles.otpBox]}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? fourthInput.current.focus() : secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={[flg ? styles.otpBoxerror : styles.otpBox]}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && thirdInput.current.focus();
                            }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {flg ? <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Please enter otp carefully</Text> : null}
                    {error?.length > 1 ? <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>{error}</Text> : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginHorizontal: 15 }}>
                    <Text style={{}}>If you are having some network issue or not getting otp then you can reset  {timeLeft == 0 ? null : <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{timeLeft} Second</Text>}</Text>
                    {timeLeft == 0 ? <TouchableOpacity onPress={start}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Reset OTP?</Text>
                    </TouchableOpacity> : null}
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-end", marginBottom: 30,
                    marginHorizontal: 15
                }}>
                    <AppButton onPress={HnadleFunc} title="Verify" size="sm" backgroundColor="#007bff" />
                </View>

            </View>

        </TouchableWithoutFeedback>
    );
};

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#0000ff", "#0000ff", 'white']}
            style={{
                elevation: 10,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 20,
                shadowColor: 'blue'
            }}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 20

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    otpContainer: {
        marginHorizontal: 10,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height * 0.040
    },
    otpBox: {
        borderRadius: 15,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: '#ebebe0',
    },
    otpBoxerror: {
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: '#ebebe0',
    },
    otpText: {
        fontSize: 25,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    signinButton: {
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
});

export default OtpScreen;