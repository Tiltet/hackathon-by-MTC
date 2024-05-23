import * as React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {scheduleStyle} from "./scheduleStyle";


export function Schedule() {
    return (
        <View style={scheduleStyle.trainContainer}>
                <View style={{alignItems:'flex-start', paddingTop:10,paddingLeft:35, paddingBottom:5}}>
                    <Text style={{fontSize: 16,}}>Сегодня, пятница 24</Text>
                </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={scheduleStyle.button_text}>Рабочий день  8:00-20:00</Text>
                    </View>

                </View>
            </TouchableOpacity>
            <View style={{alignItems:'flex-start', paddingTop:10, paddingLeft:35, paddingBottom:5}}>
                <Text style={{fontSize: 16,}}>Завтра, суббота 25</Text>
            </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                        <Text style={scheduleStyle.button_text}>Рабочий день  20:00-8:00</Text>
                        <Image source={require('../../../assets/icons/Do not Disturb iOS.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'flex-start', paddingTop:10, paddingLeft:35, paddingBottom:5}}>
                <Text style={{fontSize: 16,}}>Воскресенье , 26 мая</Text>
            </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                        <Text style={scheduleStyle.button_text}>Рабочий день  8:00-20:00</Text>
                        <Image source={require('../../../assets/icons/Sun.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'flex-start', paddingTop:10, paddingLeft:35, paddingBottom:5}}>
                <Text style={{fontSize: 16,}}>Сегодня, пятница 24</Text>
            </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                        <Text style={scheduleStyle.button_text}>Рабочий день  8:00-20:00</Text>
                        <Image source={require('../../../assets/icons/Sun.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'flex-start', paddingTop:10, paddingLeft:35, paddingBottom:5}}>
                <Text style={{fontSize: 16,}}>Сегодня, пятница 24</Text>
            </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                        <Text style={scheduleStyle.button_text}>Выходной</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'flex-start', paddingTop:10, paddingLeft:35, paddingBottom:5}}>
                <Text style={{fontSize: 16,}}>Сегодня, пятница 24</Text>
            </View>
            <TouchableOpacity
                style={scheduleStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                        <Text style={scheduleStyle.button_text}>Рабочий день  8:00-20:00</Text>
                        <Image source={require('../../../assets/icons/Sun.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
