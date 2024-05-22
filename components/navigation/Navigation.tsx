import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "../../pages/main/Main";
import { Top } from "../../pages/top/Top";
import { More } from "../../pages/more/More";
import { Profile } from "../../pages/profile/Profile";

const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: true}}>
            <Tab.Screen
                options={{headerShown: false}}
                name="Главная"
                component={Main}
            />
            <Tab.Screen name="Профиль" component={Profile} />
            <Tab.Screen name="Топ" component={Top} />
            <Tab.Screen
                options={{headerShown: false}}
                name="Еще"
                component={More}
            />
        </Tab.Navigator>
    )
}
