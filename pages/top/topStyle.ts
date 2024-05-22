import { StyleSheet } from "react-native";

export const topStyle = StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "700",
    },
    profile: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
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
    }
});
