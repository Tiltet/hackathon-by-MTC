import * as React from 'react';
import {Text, SafeAreaView, View} from "react-native";
import {departmentStyle} from "./departmentStyle";

export function Department() {
    return (
        <View style={departmentStyle.container}>
            <Text style={departmentStyle.text}>Отдел в разработке</Text>
        </View>
    )
}
