import {StyleSheet, TextInput, TouchableOpacity} from "react-native";
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useState} from "react";

function HomeScreen({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            {/*<Text style={{marginBottom: 20}}>LOGIN</Text>*/}
            <Image source={require('../../assets/MTS_Logo_rus_r 1.png')}/>
            <Text style={{marginRight:180}}>Введите логин</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="+375 (__) ___-__-__"
            />
            <Text style={{marginRight:180}}>Введите пароль</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry
            />
            <View style={styles.go}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={{color:'white'}}>Войти</Text>
                </TouchableOpacity>
            </View>

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

function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Details' component={DetailsScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#e7e7e7',
        marginBottom:200,
        borderColor: '#f6b4b4',
        shadowColor: '#8282ad',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 20
    },
    input: {
        height: 50,
        width: 280,
        marginVertical: 5,
        padding: 8,
        backgroundColor: '#e7e7e7',
       borderBottomWidth:1,
        borderColor: '#7f858f'
    },
    go: {
        backgroundColor: '#ff0101',
        marginTop:10,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 2,
        color:'red',
        borderColor: '#f56f6f',
        width:280,
        height:30
    }
})

export default Test;
