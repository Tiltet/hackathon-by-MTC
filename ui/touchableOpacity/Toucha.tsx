import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {touchStyles} from "./touchStyles";

type Props={
    onTouch:(number)=>void
    children?:React.ReactNode
    title:string
}

const Toucha = ({onTouch, title, children}:Props) => {
    return (
        <TouchableOpacity
            style={touchStyles.button}
            onPress={onTouch}
        >
            <Text style={touchStyles.button_text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Toucha;