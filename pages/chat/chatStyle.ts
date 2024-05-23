import { StyleSheet } from "react-native";

export const chatStyle = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 15,
    },
    headerContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 15,
    },
    headerContainer_link_first: {
        paddingVertical: 5,
        marginVertical: 5,
        width: "50%",
        borderRightWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    headerContainer_link_second: {
        paddingVertical: 5,
        marginVertical: 5,
        width: "50%",
    },
    headerContainer_link_text: {
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center",
        color: "#000",
    }
});
