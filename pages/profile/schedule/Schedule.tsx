import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {scheduleStyle} from "./scheduleStyle";

export function Schedule() {
    return (
        <SafeAreaView style={scheduleStyle.container}>
            <Text style={scheduleStyle.text}>График</Text>
        </SafeAreaView>
    )
}
