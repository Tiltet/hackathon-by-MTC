import { StyleSheet } from "react-native";

export const growthStyle = StyleSheet.create({
    text: {
        fontSize: 50,
    },
    buttons: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        paddingVertical: 5,
        borderRadius: 8,
        width: "31%",
        backgroundColor: "red",
    },
    button_text: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
    }
});
