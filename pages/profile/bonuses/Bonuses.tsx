import * as React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image} from "react-native";
import {bonusStyle} from "./bonusesStyle";
import ProgressBar from "./ProgressBar";


export function Bonuses() {
    return (
        <View style={bonusStyle.trainContainer}>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop:15}}>
                        <Text style={bonusStyle.button_text}>Премия </Text>

                    </View>
                    <ProgressBar progress={80}/>
                </View>

            </TouchableOpacity>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop:15}}>
                        <Text style={bonusStyle.button_text}>Sick-days</Text>

                    </View>
                    <ProgressBar progress={80}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop:15}}>
                        <Text style={bonusStyle.button_text}>Mаркетолог</Text>

                    </View>
                    <ProgressBar progress={95}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start',paddingTop:15}}>
                        <Text style={bonusStyle.button_text}>Психолог</Text>

                    </View>
                    <ProgressBar progress={80}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start',paddingTop:5}}>
                        <Text style={bonusStyle.button_text}>Дизайнер</Text>

                    </View>
                    <ProgressBar progress={60}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={bonusStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start',paddingTop:5}}>
                        <Text style={bonusStyle.button_text}>DevOps</Text>
                    </View>
                    <ProgressBar progress={1}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
