import {StyleSheet} from "react-native";

export const statisticsStyle = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        height: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 28,
    },
    top_container: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    top_text: {
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    top_text_title: {
        paddingRight: 5,
        fontSize: 18,
        color: "#3F3F3F",
    },
    top_text_stat: {
        fontSize: 18,
        color: "red",
    },
    top_left: {
        position: "absolute",
        right: 0,
        top: 0
    },
    top_left_data: {
        fontSize: 22,
    }
});
