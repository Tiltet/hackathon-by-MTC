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
                    <Text style={[teamStyle.text, {
                        marginLeft: 5,
                        fontWeight: "400"
                    }]}>{item.month}</Text>
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
                            <Text style={[statisticsStyle.top_text_title, {
                                fontWeight: "700",
                                fontSize: 20,
                            }]}>План на год:</Text>
                            <Text style={statisticsStyle.top_text_stat}>265</Text>
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
                            <Text style={[teamStyle.text, {
                                fontWeight: "500",
                            }]}>По тарифам</Text>
                        </View>
                        <View style={teamStyle.planColumn}>
                            <Text style={[teamStyle.text, {
                                fontWeight: "500",
                            }]}>План</Text>
                        </View>
                        <View style={teamStyle.factColumn}>
                            <Text style={[teamStyle.text, {
                                fontWeight: "500",
                            }]}>Факт</Text>
                        </View>
                    </View>
                    {renderMonth()}
                </View>
            </View>
        </ScrollView>
    )
}
