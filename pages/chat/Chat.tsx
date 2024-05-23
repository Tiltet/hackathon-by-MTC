import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {chatStyle} from "./chatStyle";

export function Chat() {
    return (
        <SafeAreaView style={chatStyle.container}>
            <Text style={chatStyle.text}>Chat</Text>
        </SafeAreaView>
    )
}
