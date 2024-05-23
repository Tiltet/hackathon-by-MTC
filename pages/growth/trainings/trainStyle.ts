import {StyleSheet} from "react-native";

export const growthStyle = StyleSheet.create({
    trainContainer: {
        flexDirection: 'column',
        alignItems: "center",
        width: '100%',
        height: '100%'
    },
    train: {
        paddingVertical: 5,
        marginTop:10,
        borderRadius: 20,
        width: "91%",
        height:45,
        backgroundColor: "#d7d6d6",
    },
    button_text: {
        fontSize: 20,
        color:'#1f1f1f',
        textAlign: "center",
    }
});
