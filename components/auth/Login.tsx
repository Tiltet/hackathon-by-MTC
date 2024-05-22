import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({navigation}:any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='To Details' onPress={()=>navigation.navigate('Details')}/>
        </View>
    );
}

function DetailsScreen({navigation}:any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title='Back Home' onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
}

const Stack = createBottomTabNavigator();

function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Details' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Test;
