import * as React from 'react';
import {Text, SafeAreaView, View} from "react-native";
import {styles} from "../../../App";
import {informationStyle} from "./informationStyle";

export function Information() {
    return (
        <View style={informationStyle.container}>
            <Text style={informationStyle.text}>Информация в разработке</Text>
        </View>
    )
}
