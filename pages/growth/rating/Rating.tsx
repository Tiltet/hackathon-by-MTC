import * as React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import staticEmployees from "../../../static/staticEmployees";
import {ratingStyle} from "./ratingStyle";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const RatingStack = createNativeStackNavigator();

export function Rating() {

    const [ peoples, setPeoples ] = useState(staticEmployees);

    const renderSales = () => {
        return peoples.slice(0,5).map((item, index) => (
            <View key={item.id} style={ratingStyle.profile}>
                <Text style={ratingStyle.index}>{index + 1}</Text>
                <Image style={ratingStyle.image} source={{uri: item.imgUrl}} />

                <TouchableOpacity style={ratingStyle.profile_text}>
                    <View style={ratingStyle.profile_text_top}>
                        <Text style={ratingStyle.profile_text_top_name}>{item.name},</Text>
                        <Text style={ratingStyle.profile_text_top_age}>{item.age}</Text>
                    </View>
                    <View style={ratingStyle.profile_text_bottom}>
                        <Text style={ratingStyle.profile_text_bottom_department}>{item.department}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        ));
    }

    const renderSale = () => {
        return (
            <View style={ratingStyle.profiles}>
                <Text style={ratingStyle.title}>Top сотрудников в отделе подож</Text>
                {renderSales()}
                <TouchableOpacity style={ratingStyle.button}>
                    <Text style={ratingStyle.button_text}>Посмотреть весь топ</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView>
            {renderSale()}
        </SafeAreaView>
    )
}
