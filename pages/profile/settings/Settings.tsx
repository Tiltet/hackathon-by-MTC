import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {settingsStyle} from "./settingsStyle";

export function Settings() {
    return (
        <SafeAreaView style={settingsStyle.container}>
            <Text style={settingsStyle.text}>Настройки</Text>
        </SafeAreaView>
    )
}
