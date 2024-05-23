import * as React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import staticEmployees from "../../../static/staticEmployees";
import {ratingStyle} from "./ratingStyle";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Train from "../trainings/Train";
import Career from "../career/Career";

const RatingStack = createNativeStackNavigator();

export function Rating() {

    const [ peoples, setPeoples ] = useState(staticEmployees);

    const renderSales = () => {
        return peoples.slice(0,6).map((item, index) => (
            <View key={item.id} style={ratingStyle.profile}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}>
                    <Text style={ratingStyle.index}>{index + 1}</Text>
                    { index === 0 ? (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                            }}
                            source={require("../../../assets/icons/rating/Crown1.png")}
                        />
                    ) :  index === 1 ? (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                            }}
                            source={require("../../../assets/icons/rating/Crown2.png")}
                        />
                    ) :  index === 2 ? (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                            }}
                            source={require("../../../assets/icons/rating/Crown3.png")}
                        />
                    ) : (
                        <View></View>
                    )}
                </View>
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
                <View style={{ marginBottom: 10 }}></View>
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
