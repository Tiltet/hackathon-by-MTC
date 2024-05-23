import * as React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import Swiper from 'react-native-swiper';
import {useState} from "react";
import staticSliderData from "../../../static/staticSlider";
import {newsStyle} from "./newsStyle";
import {selectedChatStyle} from "../../chat/selectedChat/selectedChatStyle";

export function News() {

    const [sliderData, setSliderData] = useState(staticSliderData);

    const renderSlides = () => {
        console.log(sliderData);
        return sliderData.slice(0,3).map((item) =>
            <View key={item.id} style={newsStyle.slider_block}>
                <Text>
                    12321
                </Text>
                {/*
                <Image
                    style={newsStyle.news_image}
                    source={{ uri: item.imgUrl }}
                />
                */}
            </View>
        )
    };


    return (
        <View>
            <Swiper
                style={newsStyle.news_swiper}
                showsPagination={true}
                autoplay={true}
                loop={true}
            >
                {renderSlides()}
            </Swiper>
        </View>
    )
}
