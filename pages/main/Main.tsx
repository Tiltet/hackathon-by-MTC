import * as React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import {mainStyle} from "./mainStyle";

export function Main() {
    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>Main</Text>
        </SafeAreaView>
    )
}
