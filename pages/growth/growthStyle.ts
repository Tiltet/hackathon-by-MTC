import { StyleSheet } from "react-native";

export const growthStyle = StyleSheet.create({
    text: {
        fontSize: 50,
    },
    buttons: {
        marginTop: 20,
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
    },
    chat: {
        marginTop: 10,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    chat_image: {
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    chat_text: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
    },
    chat_text_name: {
        fontSize: 18,
        fontWeight: "600"
    },
    chat_text_message: {
        paddingTop: 5,
    },
    container: {
        marginTop: 15,
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
        width: "33%",
        borderRightWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    headerContainer_link_last: {
        paddingVertical: 5,
        marginVertical: 5,
        width: "33%",
    },
    headerContainer_link_text: {
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center",
        color: "#000",
    }
});
