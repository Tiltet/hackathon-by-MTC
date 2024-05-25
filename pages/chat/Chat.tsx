import * as React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, ScrollView} from "react-native";
import {chatStyle} from "./chatStyle";
import {Header} from "../../components/header/Header";
import {useState} from "react";
import {BreackDowns} from "./breakDowns/BreackDowns";
import {SelectedChat} from "./selectedChat/SelectedChat";
import {mainStyle} from "../main/mainStyle";

export function Chat() {

    const [index, setIndex] = useState(1);
    const [textFirstColor, setTextFirstColor] = useState('#000');
    const [textSecondColor, setTextSecondColor] = useState('#000');

    const handleButtonPress = (index) => {
        setIndex(index)

        if (index === 1) {
            if (textFirstColor === 'red') {
                setTextFirstColor("#000")
                setTextSecondColor("red")
            }
            else if (textFirstColor === '#000') {
                setTextFirstColor("red")
                setTextSecondColor("#000")
            }
        } else if (index === 2) {
            if (textSecondColor === 'red') {
                setTextSecondColor("#000")
                setTextFirstColor("red")
            }
            else if (textSecondColor === '#000') {
                setTextSecondColor("red")
                setTextFirstColor("#000")
            }
        }
    }

    return (
        <SafeAreaView>
            <Header/>
            <ScrollView>
                <View style={chatStyle.container}>
                    <View style={chatStyle.headerContainer}>
                        <TouchableOpacity
                            style={chatStyle.headerContainer_link_first}
                            onPress={() => handleButtonPress(1)}
                        >
                            <Text style={[chatStyle.headerContainer_link_text , { color: textFirstColor}]}>Избранное</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={chatStyle.headerContainer_link_second}
                            onPress={() => handleButtonPress(2)}
                        >
                            <Text style={[chatStyle.headerContainer_link_text , { color: textSecondColor}]}>Общий чат</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                { index === 2 ? (
                    <View style={{ marginBottom: 40 }}>
                        <BreackDowns/>
                    </View>
                ) :  index === 1 ? (
                    <View style={{ marginBottom: 40 }}>
                        <SelectedChat/>
                    </View>
                ) : (
                    <View></View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}
