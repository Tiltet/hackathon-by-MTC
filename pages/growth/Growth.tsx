import * as React from 'react';
import {Text, ScrollView, View} from "react-native";
import { growthStyle } from "./growthStyle";
import {useState} from "react";
import {Rating} from "./rating/Rating";
import Toucha from "../../ui/touchableOpacity/Toucha";
import Train from "./trainings/Train";

export function Growth() {

    const [index, setIndex] = useState(0);

    return (
        <ScrollView>
            <View style={growthStyle.buttons}>
                <Toucha
                    title={'Рейтинг'}
                    onTouch={() => setIndex(1)}
                />
                <Toucha
                    title={'Тренинги'}
                    onTouch={() => setIndex(2)}
                />
                <Toucha
                    title={'Карьера'}
                    onTouch={() => setIndex(3)}
                />
            </View>
            {/*<View style={chatStyle.container}>*/}
            {/*    <View style={chatStyle.headerContainer}>*/}
            {/*        <TouchableOpacity*/}
            {/*            style={chatStyle.headerContainer_link_first}*/}
            {/*            onPress={() => handleButtonPress(1)}*/}
            {/*        >*/}
            {/*            <Text style={[chatStyle.headerContainer_link_text , { color: textFirstColor}]}>Избранное</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*        <TouchableOpacity*/}
            {/*            style={chatStyle.headerContainer_link_second}*/}
            {/*            onPress={() => handleButtonPress(2)}*/}
            {/*        >*/}
            {/*            <Text style={[chatStyle.headerContainer_link_text , { color: textSecondColor}]}>Общий чат</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <View style={growthStyle.container}>
                { index === 1 ? (
                        <Rating/>
                ) :  index === 2 ? (
                       <Train/>
                ) :  index === 3 ? (
                    <View>
                        <Toucha
                            title={'Тренинги'}
                            onTouch={() => setIndex(2)}
                        />
                    </View>
                ) : (
                    <View></View>
                )}

            </View>
        </ScrollView>
    )
}
