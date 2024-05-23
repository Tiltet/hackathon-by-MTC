import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "../../pages/main/Main";
import { Profile } from "../../pages/profile/Profile";
import {Image} from "react-native";
import {navigationStyle} from "./navigationStyle";
import {Growth} from "../../pages/growth/Growth";
import {Group} from "../../pages/group/Group";
import {Chat} from "../../pages/chat/Chat";


const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 10,
                    color: '#A8A8A8',
                },
        }}
        >
            {/* Первая */}
            <Tab.Screen
                name="Развитие"
                component={Growth}
                options={{
                    headerShown: false,
                    tabBarLabel: "Развитие",
                    tabBarIcon: () => (
                        <Image
                            style={navigationStyle.icon}
                            source={require('../../assets/icons/navigation/star.png')}
                        />
                    ),
                }}
            />
            {/* Вторая */}
            <Tab.Screen
                name="Группа"
                component={Group}
                options={{
                    headerShown: false,
                    tabBarLabel: "Группа",
                    tabBarIcon: () => (
                        <Image
                            style={navigationStyle.icon}
                            source={require('../../assets/icons/navigation/group.png')}
                        />
                    ),
                }}
            />

            {/* Третья */}
            <Tab.Screen
                name="Главная"
                component={Main}
                options={{
                    headerShown: false,
                    tabBarLabel: "Главная",
                    tabBarIcon: () => (
                        <Image
                            style={navigationStyle.icon}
                            source={require('../../assets/icons/navigation/mainPage.png')}
                        />
                    ),
                }}
            />

            {/* Четвертая */}
            <Tab.Screen
                name="Чат"
                component={Chat}
                options={{
                    headerShown: false,
                    tabBarLabel: "Чат",
                    tabBarIcon: () => (
                        <Image
                            style={navigationStyle.icon}
                            source={require('../../assets/icons/navigation/chat.png')}
                        />
                    ),
                }}
            />

            {/* Пятая */}
            <Tab.Screen
                name="Профиль"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: "Профиль",
                    tabBarIcon: () => (
                        <Image
                            style={navigationStyle.icon}
                            source={require('../../assets/icons/navigation/profile.png')}
                        />
                    ),
                    tabBarAccessibilityLabel: "red"
                }}
            />
        </Tab.Navigator>
    )
}
