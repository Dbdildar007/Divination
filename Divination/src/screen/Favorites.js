import react, { useState, useEffect, useContext } from 'react'
import { View, Text, Dimensions, FlatList } from 'react-native'
import { AuthContext } from "../context/AuthContext";
import Icon from 'react-native-vector-icons/FontAwesome5'
import ContestData from '../components/ContestData';

const { height, width } = Dimensions.get('screen');
const Favorites = () => {

    const { userData, setuserData } = useContext(AuthContext);
    const [flg, setflg] = useState(true);
    const [data, setdata] = useState([1, 2, 3, 4, 5]);

    return (
        <View style={{ flex: 1, backgroundColor: '#dde1e3', alignItems: 'center' }}>
            <Header balance={userData.Response.bonus} />


            {flg?<View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: 20, paddingBottom: 5, alignItems: 'center', justifyContent: 'space-between', width: width }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Favorites bucket:</Text>
                <Text onPress={()=>setflg(false)} style={{ paddingEnd: 5, fontWeight: 'bold', color: '#516BDC' }}>Clear</Text>
            </View>:null}



            {flg ?<View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={(item) => <ContestData />}
                    ListFooterComponent={<View style={{ height: height * 0.30 }}></View>}
                />
            </View>:
            <View style={{marginTop:height*0.050,alignItems:'center'}}>
                <Icon name = 'database' size ={50} color ='#9EABE2'/>
                <Text style={{paddingTop:20,fontSize:18,color:'black',fontWeight:'bold'}}>Your Favorite game list is emplty</Text>
                <Text style={{paddingTop:4}}>Add matches you are interested in for fast access</Text>

                <View style={{marginTop:15,padding:10}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Recomended events</Text>
                </View>
                
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={(item) => <ContestData />}
                    ListFooterComponent={<View style={{ height: height * 0.30 }}></View>}
                />
                
                </View>}

        </View>
    )
}

const Header = ({ balance }) => {
    return (
        <View style={{ backgroundColor: 'white', paddingVertical: 15, elevation: 10, shadowColor: 'grey', width: width, paddingHorizontal: 12, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>

            <View style={{ backgroundColor: '#dde1e3', padding: 5, flexDirection: 'row', borderRadius: 30, flexWrap: 'nowrap' }}>
                <Icon name='plus-circle' size={22} color='#32cd32' />
                <Text style={{ paddingHorizontal: 5, fontWeight: 'bold', justifyContent: 'center', fontSize: 18, color: 'black' }}>{balance}</Text>
                <Text style={{ fontWeight: 'bold', justifyContent: 'center', fontSize: 18, paddingEnd: 3 }}>₹</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 23, fontStyle: 'italic', marginStart: width * 0.2 }}>Favorites</Text>

        </View>
    )
}
export default Favorites;