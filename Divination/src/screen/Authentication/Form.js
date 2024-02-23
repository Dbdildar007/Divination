import React, { useState, useContext } from "react";
import { StyleSheet, Image, Keyboard, View, Dimensions, Text, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Eicon from 'react-native-vector-icons/Entypo'
import AppButton from "../../components/AppButton";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SavedataApi } from '../../API/Api_call';
import { AuthContext } from '../../context/AuthContext'
import Services from "../../shared/Services";

const { height, width } = Dimensions.get('screen');
const Form = ({ navigation }) => {
    const [firstname, setfistname] = useState();
    const [lastname, setlastname] = useState();
    const [emailid, setemailid] = useState();
    const [state, setstate] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [loading, setloading] = useState(false);

    const route = useRoute();
    const { number, inviteCode } = route.params;


    //console.log(inviteCode);
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

    const { userData, setuserData } = useContext(AuthContext);

    //console.log('userdata from form', userData);

    const data = [
        { label: 'select', value: null },
        { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { label: 'Assam', value: 'Assam' },
        { label: 'Bihar', value: 'Bihar' },
        { label: 'Chhattisgarh', value: 'Chhattisgarh' },
        { label: 'Goa', value: 'Goa' },
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Haryana', value: 'Haryana' },
        { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { label: 'Jharkhand', value: 'Jharkhand' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Manipur', value: 'Manipur' },
        { label: 'Meghalaya', value: 'Meghalaya' },
        { label: 'Mizoram', value: 'Mizoram' },
        { label: 'Nagaland', value: 'Nagaland' },
        { label: 'Odisha', value: 'Odisha' },
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Rajasthan', value: 'Rajasthan' },
        { label: 'Sikkim', value: 'Sikkim' },
        { label: 'Tamil Nadu', value: 'Tamil Nadu' },
        { label: 'Telangana', value: 'Telangana' },
        { label: 'Tripura', value: 'Tripura' },
        { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { label: 'Uttarakhand', value: 'Uttarakhand' },
        { label: 'West Bengal', value: 'West Bengal' }
    ];

    const [fvalue, setfvalue] = useState(0);
    const [lvalue, setlvalue] = useState(0);
    const [emailvalue, setemailvalue] = useState(0);
    const [Statevalue, setStatevalue] = useState(0);


    //generate referalcode 
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'];
    function randomNum(target) {
        const newRandomNum = (num = 1, val = "") => {
            val += (target[Math.floor(Math.random() * 9)])
            if (num === 1) return val;
            return newRandomNum(--num, val);
        }
        return newRandomNum;
    }
    const word = (randomNum(words)(2).toUpperCase());
    const num = (randomNum(numbers)(2));
    const word2 = (randomNum(words)(2).toUpperCase());

    const referalCode = word + num + word2;
    //console.log(referalCode);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const Hanlefunc = async () => {
        if (firstname?.length > 0) {
            setfvalue(0)
            if (lastname?.length > 0) {
                setlvalue(0)
                if (emailRegex.test(emailid)) {
                    setemailvalue(0);
                    if (state?.length != null) {
                        setStatevalue(0);
                        setloading(true);
                        const ress = await SavedataApi({ firstname, lastname, emailid, state, number, inviteCode, referalCode });
                        if (ress && ress.token && ress.Response) {
                            //here we have to save data for context api
                            setuserData(ress);
                            await Services.setUserAuth(ress);
                            //console.log('form ress', ress);
                            //navigation.navigate('HomeScreen');
                        } else {
                            handleflashmessage({ error: true, message: ress.result });
                        }
                        setloading(false);

                    } else {
                        handleflashmessage({ error: true, message: "Please Select state." });
                        setStatevalue(1);
                    }
                } else {
                    handleflashmessage({ error: true, message: "Please Enter Correct email id." });
                    setemailvalue(1)
                }
            } else {
                handleflashmessage({ error: true, message: "Please Enter last name." });
                setlvalue(1)

            }
        } else {
            setfvalue(1)
            handleflashmessage({ error: true, message: "Please Enter First name." });
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Header navigation={navigation} />
                <FlashMessage />
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />

                <View style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40, elevation: 10, marginTop: height * 0.050, backgroundColor: '#E9F7EF', flex: 1, width: width, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: "#D6EAF8", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: fvalue, borderColor: 'red' }}>
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.047, marginTop: 7, fontSize: 18, marginStart: 7 }}
                            blurOnSubmit={true}
                            value={firstname}
                            onChangeText={(vL) => setfistname(vL)}
                            placeholder='Firt Name...'
                            autoCapitalize='sentences'
                            placeholderTextColor={'grey'}
                        />
                    </View>


                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: "#D6EAF8", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: lvalue, borderColor: 'red' }}>
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.047, marginTop: 7, fontSize: 18, marginStart: 7 }}
                            blurOnSubmit={true}
                            value={lastname}
                            onChangeText={(vL) => setlastname(vL)}
                            placeholder='Last Name...'
                            autoCapitalize='sentences'
                            placeholderTextColor={'grey'}
                        />

                    </View>

                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: "#D6EAF8", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: emailvalue, borderColor: 'red' }}>
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.047, marginTop: 7, fontSize: 18, marginStart: 7 }}
                            blurOnSubmit={true}
                            value={emailid}
                            onChangeText={(vL) => setemailid(vL)}
                            placeholder='Email id...'
                            autoCapitalize='none'
                            keyboardType="email-address"
                            placeholderTextColor={'grey'}
                        />
                    </View>

                    <View style={{ backgroundColor: "#D6EAF8", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: Statevalue, borderColor: 'red' }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={{ color: 'black', marginStart: 10, fontWeight: 'bold' }}
                            selectedTextStyle={{ color: 'blue', fontWeight: 'bold', marginStart: 10, fontSize: 20, paddingTop: 10 }}
                            inputSearchStyle={{ backgroundColor: '#D6EAF8', borderRadius: 20, fontWeight: 'bold' }}
                            iconStyle={{ marginEnd: 10, width: width * 0.1, tintColor: 'blue' }}
                            containerStyle={{ backgroundColor: '#D1F2EB', borderRadius: 20, marginTop: 20 }}
                            itemTextStyle={{ color: 'black', fontWeight: 'bold', }}
                            activeColor={'blue'}
                            dropdownPosition='bottom'
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select State...' : '...'}
                            searchPlaceholder="Search..."
                            value={state}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setstate(item.value);
                                setIsFocus(false);
                            }} />

                    </View>


                    <KeyboardAvoidingView behavior={10} style={{ flex: 1, backgroundColor: 'transparent', width: width, justifyContent: 'flex-end', marginBottom: height * 0.021 }}>
                        <View style={{ borderWidth: 1, marginBottom: 8, borderColor: '#ebebe0' }}></View>

                        <View style={{ width: width * 0.8, marginHorizontal: width * 0.1 }}>
                            <AppButton title='Submit' onPress={Hanlefunc} />
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


export default Form;