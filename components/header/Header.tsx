import * as React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import {headerStyle} from "./headerStyle";

export function Header() {
    return (
        <SafeAreaView style={headerStyle.container}>
            <View style={headerStyle.logo}>
                <Image
                    style={headerStyle.logo_image}
                    source={require("../../assets/MTC_logo.png")}
                />
            </View>
            <View style={headerStyle.icons}>
                <TouchableOpacity>
                    <Image
                        style={headerStyle.logo_icon}
                        source={require("../../assets/icons/header/alert.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={headerStyle.logo_icon}
                        source={require("../../assets/icons/header/find.png")}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
