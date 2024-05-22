import {StatusBar, TextInput, TouchableOpacity} from "react-native";
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useState} from "react";
import {loginStyle} from "./loginStyle";

// СТРАНИЦА ВХОДА В АККАУНТ
export function HomeScreen({navigation}: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={loginStyle.wrapper}>
            <View style={loginStyle.container}>
                <View style={loginStyle.image_container}>
                    <Image style={loginStyle.image} source={require('../../assets/MTC_logo.png')}/>
                </View>
                <Text style={loginStyle.text_login}>Введите логин</Text>
                <TextInput
                    style={loginStyle.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="+375 (__) ___-__-__"
                />
                <Text style={loginStyle.text_password}>Введите пароль</Text>
                <TextInput
                    style={loginStyle.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Пароль"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={loginStyle.button}
                    onPress={() => navigation.navigate('Navigation')}
                >
                    <Text style={loginStyle.button_text}>Войти</Text>
                </TouchableOpacity>

            </View>
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

function DetailsScreen({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title='Back Home' onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}

const Stack = createBottomTabNavigator();

export default function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Details' component={DetailsScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
