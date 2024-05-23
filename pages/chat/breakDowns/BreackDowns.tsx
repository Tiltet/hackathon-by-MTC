import * as React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import {breackDownsStyle} from "./breackDownsStyle";

export function BreackDowns() {
    return (
        <SafeAreaView>
            <View style={breackDownsStyle.container}>
                <Text style={breackDownsStyle.text}>BreackDowns</Text>
            </View>
        </SafeAreaView>
    )
}
