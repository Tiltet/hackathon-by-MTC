import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {growthStyle} from "./trainStyle";

const Train = () => {
    return (
        <View style={growthStyle.trainContainer}>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={()=>{}}
            >
                <Text style={growthStyle.button_text}>123123123</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={()=>{}}
            >
                <Text style={growthStyle.button_text}>123123123</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={()=>{}}
            >
                <Text style={growthStyle.button_text}>123123123</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={()=>{}}
            >
                <Text style={growthStyle.button_text}>123</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={()=>{}}
            >
                <Text style={growthStyle.button_text}>123123123</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Train;