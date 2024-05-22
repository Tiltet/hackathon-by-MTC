import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { Main } from "../../pages/main/Main";
import { Profile } from "../../pages/profile/Profile";
import { Top } from "../../pages/top/Top";
import { More } from "../../pages/more/More";

const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: true,}}>
                <Tab.Screen options={{headerShown: false,}} name="Главная" component={Main} />
                <Tab.Screen name="Профиль" component={Profile} />
                <Tab.Screen name="Топ" component={Top} />
                <Tab.Screen options={{headerShown: false,}} name="Еще" component={More} />
            </Tab.Navigator>
            <StatusBar barStyle="default"/>
        </NavigationContainer>
    )
}
