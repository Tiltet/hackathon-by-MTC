import * as React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, ScrollView} from "react-native";
import {groupStyle} from "./groupStyle";
import { Header } from "../../components/header/Header";
import {useState} from "react";
import {styles} from "../../App";
import {growthStyle} from "../growth/growthStyle";
import {Rating} from "../growth/rating/Rating";
import Train from "../growth/trainings/Train";
import Career from "../growth/career/Career";
import {Team} from "./team/Team";
import {Department} from "./department/Department";
import {Information} from "./information/information";

export function Group() {

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
                    <View style={groupStyle.container}>
                        <View style={groupStyle.headerContainer}>
                            <TouchableOpacity
                                style={groupStyle.headerContainer_link_first}
                                onPress={() => handleButtonPress(1)}
                            >
                                <Text style={[groupStyle.headerContainer_link_text , { color: textFirstColor}]}>Команда</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={groupStyle.headerContainer_link_first}
                                onPress={() => handleButtonPress(2)}
                            >
                                <Text style={[groupStyle.headerContainer_link_text , { color: textSecondColor}]}>Отдел</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={groupStyle.headerContainer_link_last}
                                onPress={() => handleButtonPress(3)}
                            >
                                <Text style={[groupStyle.headerContainer_link_text , { color: textThirdColor}]}>Информация</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    { index === 1 ? (
                        <View>
                            <Team/>
                        </View>
                    ) :  index === 2 ? (
                        <View>
                            <Department/>
                        </View>
                    ) :  index === 3 ? (
                        <View>
                            <Information/>
                        </View>
                    ) : (
                        <View></View>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
