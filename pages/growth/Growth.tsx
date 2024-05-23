import * as React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from "react-native";
import { growthStyle } from "./growthStyle";
import {styles} from "../../App";
import {useState} from "react";
import {Rating} from "./rating/Rating";

export function Growth() {

    const [index, setIndex] = useState(0);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={growthStyle.buttons}>
                    <TouchableOpacity
                        style={growthStyle.button}
                        onPress={() => setIndex(1)}
                    >
                        <Text style={growthStyle.button_text}>Рейтинг</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={growthStyle.button}
                        onPress={() => setIndex(2)}
                    >
                        <Text style={growthStyle.button_text}>Тренинги</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={growthStyle.button}
                        onPress={() => setIndex(3)}
                    >
                        <Text style={growthStyle.button_text}>Карьера</Text>
                    </TouchableOpacity>
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
