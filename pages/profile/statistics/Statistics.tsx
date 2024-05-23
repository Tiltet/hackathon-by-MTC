import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {statisticsStyle} from "./statisticsStyle";

export function Statistics() {
    return (
        <SafeAreaView style={statisticsStyle.container}>
            <Text style={statisticsStyle.text}>Статистика</Text>
        </SafeAreaView>
    )
}
