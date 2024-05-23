import { StyleSheet } from "react-native";

export const selectedChatStyle = StyleSheet.create({
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
    }
});
