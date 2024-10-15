import * as React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from "react-native";
import {useState} from "react";
import staticTeamPeople from "../../../static/staticTeams";
import { teamStyle } from "./teamStyle";

export function Team() {

    const [members, setMembers] = useState(staticTeamPeople);

    function renderTeamPeople() {
        return members.map((item) =>
            <View style={teamStyle.line}>
                <TouchableOpacity style={teamStyle.nameColumn}>
                    <Text style={teamStyle.text}>{item.name} {item.surname}</Text>
                </TouchableOpacity>
                <View style={teamStyle.planColumn}>
                    <Text style={[teamStyle.text, {
                        textAlign: "center"
                    }]}>{item.plan}</Text>
                </View>
                <View style={teamStyle.factColumn}>
                    <Text style={[teamStyle.text, {
                        textAlign: "center"
                    }]}>{item.fact}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={teamStyle.container}>
                <View style={teamStyle.mainLine}>
                    <View style={teamStyle.nameColumn}>
                        <Text style={teamStyle.text}>По тарифам</Text>
                    </View>
                    <View style={teamStyle.planColumn}>
                        <Text style={teamStyle.text}>План</Text>
                    </View>
                    <View style={teamStyle.factColumn}>
                        <Text style={[teamStyle.text, {
                            marginLeft: 15,
                        }]}>Факт</Text>
                    </View>
                </View>
                {renderTeamPeople()}
            </View>
        </SafeAreaView>
    )
}
