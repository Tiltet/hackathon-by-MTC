import * as React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {styles} from "../../App";
import {topStyle} from "./topStyle";
import staticEmployees from "../../static/staticEmployees";
import {useState} from "react";

export function Top() {

    const [ peoples, setPeoples ] = useState(staticEmployees);

    const renderNews = () => {
        return peoples.map((item) => (
            <View key={item.id} style={topStyle.profile}>
                <Image style={topStyle.image} source={{uri: item.imgUrl}} />

                <TouchableOpacity style={topStyle.profile_text}>
                    <View style={topStyle.profile_text_top}>
                        <Text style={topStyle.profile_text_top_name}>{item.name},</Text>
                        <Text style={topStyle.profile_text_top_age}>{item.age}</Text>
                    </View>
                    <View style={topStyle.profile_text_bottom}>
                        <Text style={topStyle.profile_text_bottom_department}>{item.department}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        ));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={topStyle.title}>Top сотрудников в отделе подож</Text>
            {renderNews()}
            <TouchableOpacity>
                <Text>Посмотреть весь топ</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
