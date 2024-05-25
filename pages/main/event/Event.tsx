import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import {useState} from "react";
import staticEvents from "../../../static/staticEvents";
import {eventStyle} from "./eventStyle";

export function Event() {

    const [events, setEvents] = useState(staticEvents);

    function renderEvents() {
        return events.map((item) =>
            <View style={eventStyle.event}>
                <TouchableOpacity>
                    <Text style={eventStyle.event_data}>
                        {item.data}
                    </Text>
                    <Text style={eventStyle.event_title}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={eventStyle.container}>
            {renderEvents()}
        </View>
    )
}
