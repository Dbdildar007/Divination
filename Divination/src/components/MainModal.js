import React,{useRef,useState} from 'react';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AIcon from 'react-native-vector-icons/FontAwesome5'

import {
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  View,Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  TextInput
} from 'react-native';

const {height,width} = Dimensions.get('screen')

const MainModal = (props) =>  {
const [amount,setamount] = useState('10')

const refdata = useRef(null);

console.log(props);

const focusMInput = () => {
    refdata.current.open();
}

props.childrefM.current = {
    focusMInput: focusMInput,
};



    const minusFunc = () => {
        if (amount > 99) {
            setamount(String(Number(amount) - 100));

        }
    }

    const PlusFunc = () => {
        if (amount > 0 && amount < 2401) {
            setamount(String(Number(amount) + 100));
        }
    }

    const BetFunc = (amount) =>{
        console.log('betfunc',amount*1.9)
    }



    return (
     
        <Modal style={{height:height*0.48,borderRadius:20,width:width}} position={"center"} ref={refdata} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1, backgroundColor: '#f2f3f4', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>

                    <View style={{ backgroundColor: '#D3BDEA', padding: 5, justifyContent: 'space-between', borderRadius: 10, flexDirection: 'row', margin: 8, alignItems: 'center', paddingEnd: 10 }}>
                        <View >
                            <View style={{

                                borderBottomWidth: 2,
                                borderColor: 'blue',
                                backgroundColor: 'transparent'
                                , marginBottom: height * 0.005

                            }}>
                                <TextInput
                                    style={{
                                        color: 'black',
                                        top: 10, fontSize: 19,
                                        fontWeight: 'bold',


                                    }}
                                    placeholder='Enter Strake  '
                                    keyboardType='number-pad'
                                    maxLength={amount == 0 ? 1 : 4}
                                    value={amount}
                                    onChangeText={(value) => setamount(value)}
                                />

                            </View>

                            {(amount > 0 && amount < 10) ? <Text style={{ paddingStart: 5, color: 'red' }}>Min. Strake 10 ₹</Text>
                                : (amount > 2500) ? <Text style={{ paddingStart: 5, color: 'red' }}>Max. Strake 2500 ₹</Text> : <Text style={{ paddingStart: 5 }}>from 10 to 2500 ₹</Text>}

                            {(amount > 9 && amount < 2501) ?
                                <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                                    <Text>Potential winnngs:</Text>
                                    <Text style={{ color: 'blue', fontSize: 16, fontWeight: 'bold', paddingStart: 8 }}>{Number(amount*1.8).toFixed(2)}₹</Text>
                                </View> : null}

                        </View>
                        <View style={{ flexDirection: 'row', marginStart: width * 0, alignItems: 'center' }}>
                            <TouchableOpacity
                                style={(amount > 99 ) ? { ...styles.IdEnableButton } : { ...styles.IdDisableButton }}
                                disabled={(amount > 99) ? false : true}
                                onPress={() => minusFunc()}>
                                <AIcon name='minus' size={19} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={(amount > 0 && amount < 2401) ? { ...styles.IdEnableButton } : { ...styles.IdDisableButton }}
                                disabled={(amount > 0 && amount < 2401) ? false : true}
                                onPress={() => PlusFunc()}>
                                <AIcon name='plus' size={19} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={(amount > 9 && amount < 2501) ? { ...styles.EnableButton } : { ...styles.DisableButton }}
                                disabled={(amount > 9 && amount < 2501) ? false : true}
                                onPress={() => BetFunc(amount)}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>BET</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', margin: 15, marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <AIcon onPress={() => console.log('waalete')} name='plus-circle' size={40} color='#32cd32' />
                            <View style={{ marginStart: 8 }}>
                                <Text style={{ fontSize: 17 }}>Balance:</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>53.3 </Text>
                                    <Text style={{ paddingStart: 1, fontSize: 18, fontWeight: 'bold' }}>₹</Text>
                                </View>
                            </View>
                        </View>
                        <Pressable onPress={() => console.log('wallet')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'blue' }}>Top up account </Text>
                            <Icon name='arrow-forward-ios' size={20} color='blue' />
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', elevation: 10, alignItems: 'center', margin: 10, borderRadius: 15 }}>

                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'nowrap', width: width * 0.75 }}>
                            <Text style={{ paddingStart: 6, padding: 7, color: 'black', fontSize: 17 }}>First team name will be here jsj jfgnsid jsdjfjd d f f f f f   ekfdkfdnr jdjfjdjfn</Text>
                            <Text style={{ paddingStart: 10, paddingBottom: 8 }}>team name</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 3 }}>
                            <Text style={{ fontSize: 18, paddingEnd: 6, fontWeight: 'bold', color: 'blue' }}>YES</Text>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'blue' }}>1.5</Text>
                        </View>
                    </View>


                    <Text style={{ fontWeight: 'bold', color: 'black', paddingStart: 15, fontSize: 17, marginTop: 20 }}>Quick bets</Text>
                    <KeyboardAvoidingView behavior={30} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: height * 0.030, margin: 15 }}>

                        <TouchableOpacity
                            style={{ backgroundColor: '#B527B8', elevation: 10, borderRadius: 10, padding: 10, paddingHorizontal: width * 0.1 }}
                            disabled={false}
                            onPress={() => BetFunc(10)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>10</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', paddingStart: 4 }}>₹</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: '#B527B8', elevation: 10, borderRadius: 10, padding: 10, paddingHorizontal: width * 0.1 }}
                            disabled={false}
                            onPress={() => BetFunc(50)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>50</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', paddingStart: 4 }}>₹</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: '#B527B8', elevation: 10, borderRadius: 10, padding: 10, paddingHorizontal: width * 0.1 }}
                            disabled={false}
                            onPress={() => BetFunc(100)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>100</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', paddingStart: 4 }}>₹</Text>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>
            </TouchableWithoutFeedback>
         
        </Modal>
    );
  }

export default MainModal

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }, EnableButton: {
    marginStart: 10,
    backgroundColor: '#B527B8',
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 25
},
DisableButton: {

    marginStart: 10,
    backgroundColor: 'grey',
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 25
},
IdEnableButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginStart: 10,
    elevation: 10
},
IdDisableButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
    marginStart: 10,
    elevation: 10
}

});