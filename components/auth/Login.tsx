import {StyleSheet, TextInput, TouchableOpacity} from "react-native";
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useState} from "react";

function HomeScreen({navigation}: any) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{marginVertical:20}}>LOGIN</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity

                onPress={() => navigation.navigate('Details')}
            >
                <Text>GO</Text>
            </TouchableOpacity>
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
        marginVertical:50,
        marginHorizontal:50,
        padding: 8,
        backgroundColor: '#e11414',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#2f4554'
    },
    input:{
        height:40,
        width:120,
        padding: 8,
        backgroundColor: '#fdfdfd',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#2f4554'
    }
})

export default Test;
