import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import {mainStyle} from "./mainStyle";
import {Header} from "../../components/header/Header";
import {chatStyle} from "../chat/chatStyle";
import {useState} from "react";
import {News} from "./news/News";
import {Event} from "./event/Event";

export function Main() {

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
            <ScrollView style={mainStyle.container}>
                <View style={chatStyle.container}>
                    <View style={chatStyle.headerContainer}>
                        <TouchableOpacity
                            style={chatStyle.headerContainer_link_first}
                            onPress={() => handleButtonPress(1)}
                        >
                            <Text style={[chatStyle.headerContainer_link_text , { color: textFirstColor}]}>Новости</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={chatStyle.headerContainer_link_second}
                            onPress={() => handleButtonPress(2)}
                        >
                            <Text style={[chatStyle.headerContainer_link_text , { color: textSecondColor}]}>События</Text>
                        </TouchableOpacity>
                    </View>

                    { index === 1 ? (
                        <View style={{ marginBottom: 60 }}>
                            <News/>
                        </View>
                    ) :  index === 2 ? (
                        <View>
                            <Event/>
                        </View>
                    ) : (
                        <View></View>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
