import * as React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView} from "react-native";
import {statisticsStyle} from "./statisticsStyle";
import {styles} from "../../../App";
import {teamStyle} from "../../group/team/teamStyle";
import {useState} from "react";
import staticMonthStats from "../../../static/staticMonthStats";
import {Team} from "../../group/team/Team";
import {Department} from "../../group/department/Department";
import {Information} from "../../group/information/information";

export function Statistics() {

    const [monthStats, setMonthStats] = useState(staticMonthStats);

    function renderMonth() {
        return monthStats.map((item) =>
            <View style={teamStyle.line}>
                <TouchableOpacity style={teamStyle.nameColumn}>
                    <Text style={teamStyle.text}>{item.month}</Text>
                </TouchableOpacity>
                <View style={teamStyle.planColumn}>
                    <Text style={[teamStyle.text, { fontWeight: "600" }]}>{item.plan}</Text>
                </View>
                <View style={teamStyle.factColumn}>
                    { item.plan < item.fact ? (
                        <Text style={[teamStyle.text, { color: "red"}]}>{item.fact}</Text>
                    ) : (
                        <Text style={[teamStyle.text, { color: "green"}]}>{item.fact}</Text>
                    )}
                </View>
            </View>
        )
    }


    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={statisticsStyle.top_container}>
                    <View>
                        <View style={statisticsStyle.top_text}>
                            <Text style={statisticsStyle.top_text_title}>План на год:</Text>
                            <Text style={statisticsStyle.top_text_stat}>12</Text>
                        </View>
                        <View style={statisticsStyle.top_text}>
                            <Text style={statisticsStyle.top_text_title}>Выполнено за год:</Text>
                            <Image
                                style={{
                                    width: 15,
                                    height: 15,
                                }}
                                source={require('../../../assets/icons/stats/downRed.png')}
                            />
                            <Text style={statisticsStyle.top_text_stat}>150</Text>
                        </View>
                        <View style={statisticsStyle.top_text}>
                            <Text style={statisticsStyle.top_text_title}>Процент выполнения плана:</Text>
                            <Image
                                style={{
                                    width: 15,
                                    height: 15,
                                }}
                                source={require('../../../assets/icons/stats/downRed.png')}
                            />
                            <Text style={statisticsStyle.top_text_stat}>75%</Text>
                        </View>
                    </View>
                    <View style={statisticsStyle.top_left}>
                        <Text style={statisticsStyle.top_left_data}>2024 год</Text>
                    </View>
                </View>


                <View style={[teamStyle.container, { marginBottom: 20 } ]}>
                    <View style={teamStyle.mainLine}>
                        <View style={teamStyle.nameColumn}>
                            <Text style={teamStyle.text}>По тарифам</Text>
                        </View>
                        <View style={teamStyle.planColumn}>
                            <Text style={teamStyle.text}>План</Text>
                        </View>
                        <View style={teamStyle.factColumn}>
                            <Text style={teamStyle.text}>Факт</Text>
                        </View>
                    </View>
                    {renderMonth()}
                </View>
            </View>
        </ScrollView>
    )
}
