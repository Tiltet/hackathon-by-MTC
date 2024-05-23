import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {careerStyle} from "./careerStyle";

const Career = () => {
    return (
        <View style={careerStyle.trainContainer}>
            <TouchableOpacity
                style={careerStyle.train}
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
                    <Text style={careerStyle.button_text}>Психология продaж</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:50 }}>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
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
                    <Text style={careerStyle.button_text}>Инвестиции</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:75 }}>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
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
                    <Text style={careerStyle.button_text}>Кибербезопасноть</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:80 }}>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
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
                    <Text style={careerStyle.button_text}>Страхование</Text>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row',  paddingRight:10, paddingTop:80 }}>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Career;