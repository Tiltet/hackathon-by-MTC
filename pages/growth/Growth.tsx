import * as React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from "react-native";
import { growthStyle } from "./growthStyle";
import {styles} from "../../App";
import {useState} from "react";
import {Rating} from "./rating/Rating";
import Toucha from "../../ui/touchableOpacity/Toucha";

export function Growth() {

    const [index, setIndex] = useState(0);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={growthStyle.buttons}>
                    <Toucha
                        title={'Рейтинг'}
                        onTouch={() => setIndex(1)}
                    />
                    <Toucha
                        title={'Тренинги'}
                        onTouch={() => setIndex(1)}
                    />
                    <Toucha
                        title={'Карьера'}
                        onTouch={() => setIndex(1)}
                    />
                </View>

                { index === 1 ? (
                    <View>
                        <Rating/>
                    </View>
                ) :  index === 2 ? (
                    <View>
                        <Text>Тренинги</Text>
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
    )
}
