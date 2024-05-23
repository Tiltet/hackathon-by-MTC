import * as React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {eventStyle} from "./eventStyle";

export function Event() {
    return (
        <ScrollView style={eventStyle.container}>
            <View>
                <Text>Event</Text>
            </View>
        </ScrollView>
    )
}
