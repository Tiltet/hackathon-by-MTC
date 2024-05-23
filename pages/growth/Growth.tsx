import * as React from 'react';
import {Text, ScrollView, View, TouchableOpacity, SafeAreaView} from "react-native";
import { growthStyle } from "./growthStyle";
import {styles} from "../../App";
import {useState} from "react";
import {Rating} from "./rating/Rating";
import Toucha from "../../ui/touchableOpacity/Toucha";
import {Header} from "../../components/header/Header";
import Train from "./trainings/Train";

export function Growth() {

    const [index, setIndex] = useState(1);
    const [textFirstColor, setTextFirstColor] = useState('#000');
    const [textSecondColor, setTextSecondColor] = useState('#000');
    const [textThirdColor, setTextThirdColor] = useState('#000');

    const handleButtonPress = (index) => {
        setIndex(index)
        if (index === 1) {
             if (textFirstColor === '#000') {
                setTextFirstColor("red")
                setTextSecondColor("#000")
                setTextThirdColor("#000")
            }
        } else if (index === 2) {
             if (textSecondColor === '#000') {
                setTextSecondColor("red")
                setTextFirstColor("#000")
                setTextThirdColor("#000")
            }
        }else if (index === 3) {
            if (textThirdColor === '#000') {
                setTextThirdColor("red")
                setTextFirstColor("#000")
                setTextSecondColor("#000")
            }
        }
    }

    return (
        <SafeAreaView>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={growthStyle.container}>
                        <View style={growthStyle.headerContainer}>
                            <TouchableOpacity
                                style={growthStyle.headerContainer_link_first}
                                onPress={() => handleButtonPress(1)}
                            >
                                <Text style={[growthStyle.headerContainer_link_text , { color: textFirstColor}]}>Рейтинг</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={growthStyle.headerContainer_link_first}
                                onPress={() => handleButtonPress(2)}
                            >
                                <Text style={[growthStyle.headerContainer_link_text , { color: textSecondColor}]}>Тренинг</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={growthStyle.headerContainer_link_last}
                                onPress={() => handleButtonPress(3)}
                            >
                                <Text style={[growthStyle.headerContainer_link_text , { color: textThirdColor}]}>Карьера</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    { index === 1 ? (
                        <View>
                            <Rating/>
                        </View>
                    ) :  index === 2 ? (
                        <View>
                            <Train/>
                        </View>
                    ) :  index === 3 ? (
                        <View>
                            <Text>Карьера</Text>
                        </View>
                    ) : (
                        <View></View>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
