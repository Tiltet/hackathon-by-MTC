import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";
import {growthStyle} from "./trainStyle";

const Train = () => {
    return (
        <View style={growthStyle.trainContainer}>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={() => {
                }}
            >

                <Image style={{marginLeft: 10}} source={require('../../../assets/image 24.png')}/>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height:150,
                    paddingTop:10
                }}>
                    <Text style={growthStyle.button_text}>Психология продaж</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:40 }}>
                        <Text style={growthStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={() => {
                }}
            >

                <Image style={{marginLeft: 10}} source={require('../../../assets/image 25.png')}/>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height:150,
                    paddingTop:10
                }}>
                    <Text style={growthStyle.button_text}>Инвестиции</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:65 }}>
                        <Text style={growthStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={() => {
                }}
            >

                <Image style={{marginLeft: 10}} source={require('../../../assets/image 26.png')}/>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height:150,
                    paddingTop:10
                }}>
                    <Text style={growthStyle.button_text}>Кибербезопасноть</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:60 }}>
                        <Text style={growthStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={growthStyle.train}
                onPress={() => {
                }}
            >
                <Image style={{marginLeft: 10}} source={require('../../../assets/image 27.png')}/>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height:150,
                    paddingTop:10
                }}>
                    <Text style={growthStyle.button_text}>Страхование</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:60 }}>
                        <Text style={growthStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Train;
