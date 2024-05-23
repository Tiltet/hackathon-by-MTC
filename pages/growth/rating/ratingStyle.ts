import { StyleSheet } from "react-native";

export const ratingStyle = StyleSheet.create({
    profiles: {
        marginTop: 10,
    },
    title: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "700",
    },
    profile: {
        marginBottom: 8,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    index: {
        fontSize: 24,
        paddingRight: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    profile_text: {
        paddingLeft: 15,
        display: "flex",
        flexDirection: "column",
    },
    profile_text_top: {
        display: "flex",
        flexDirection: "row",
    },
    profile_text_top_name: {
        fontSize: 18,
    },
    profile_text_top_age: {
        fontSize: 18,
    },
    profile_text_bottom: {

    },
    profile_text_bottom_department: {
        fontSize: 18,
    },
    button: {
        marginTop: 10,
        width: "100%",
        backgroundColor: "red",
        borderRadius: 8,
    },
    button_text: {
        paddingVertical: 5,
        textAlign: "center",
        fontSize: 20,
        color: "#fff"
    }
});
