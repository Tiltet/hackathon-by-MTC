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
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>Тим-лидер</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>

            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>Тестировщик</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>Интернет-маркетолог</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>Инжерен-психолог</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>Дизайнер</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={careerStyle.train}
                onPress={() => {
                }}
            >
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={careerStyle.button_text}>DevOps</Text>
                        <Text style={careerStyle.button_text_dlit}>3 месяца</Text>
                    </View>
                    <Image style={{marginRight:20, marginTop:20}} source={require('../../../assets/Vector.png')}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Career;
