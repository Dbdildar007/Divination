import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#0000ff", "#0000ff", 'white']}
            style={{
                elevation: 8,
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 12,
                shadowColor:'blue'
            }}
        >
            <Text style={{
                fontSize: 25,
                fontStyle:'italic',
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
            }}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);
export default AppButton;