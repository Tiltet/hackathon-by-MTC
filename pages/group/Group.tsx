import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {groupStyle} from "./groupStyle";

export function Group() {
    return (
        <SafeAreaView style={groupStyle.container}>
            <Text style={groupStyle.text}>Группа</Text>
        </SafeAreaView>
    )
}
