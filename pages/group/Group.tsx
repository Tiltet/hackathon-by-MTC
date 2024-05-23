import * as React from 'react';
import {Text, SafeAreaView, View} from "react-native";
import {groupStyle} from "./groupStyle";
import { Header } from "../../components/header/Header";

export function Group() {
    return (
        <SafeAreaView>
            <Header/>
            <Text>Группы</Text>
        </SafeAreaView>
    )
}
