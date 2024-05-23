import * as React from 'react';
import { Text, SafeAreaView } from "react-native";
import {bonusesStyle} from "./bonusesStyle";

export function Bonuses() {
    return (
        <SafeAreaView style={bonusesStyle.container}>
            <Text style={bonusesStyle.text}>Бонусы</Text>
        </SafeAreaView>
    )
}
