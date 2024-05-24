import * as React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import {selectedChatStyle} from "./selectedChatStyle";
import {ratingStyle} from "../../growth/rating/ratingStyle";
import {useState} from "react";
import staticSelectedChats from "../../../static/staticSelectedChats";
import {styles} from "../../../App";

export function SelectedChat() {

    const [ selectedChats, setSelectedChats ] = useState(staticSelectedChats);

    const renderSelectedChats = () => {
        return selectedChats.slice(0,7).map((item, index) => (
            <View style={selectedChatStyle.chat} key={item.id}>
                <Image
                    style={selectedChatStyle.chat_image}
                    source={{uri: item.imgUrl}}
                />
                <TouchableOpacity style={selectedChatStyle.chat_text}>
                    <View>
                        <Text style={selectedChatStyle.chat_text_name}>{item.name}</Text>
                        <Text style={selectedChatStyle.chat_text_message}>{item.message}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        ));
    }

    return (
        <View style={styles.container}>
            {renderSelectedChats()}
        </View>
    )
}
