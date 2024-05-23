import * as React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Settings} from "../settings/Settings";

const HomeStack = createNativeStackNavigator();

export function More() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Еще" component={MorePage} />
            <HomeStack.Screen name="Settings" component={Settings} />
            <HomeStack.Screen name="Page1" component={Page1} />
        </HomeStack.Navigator>
    )
}

function MorePage({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Настройки</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
                <Text>Страница 1</Text>
            </TouchableOpacity>
        </View>
    );
}

function Page1({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Страница 1</Text>
            </TouchableOpacity>
        </View>
    );
}
