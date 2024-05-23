import { StyleSheet } from "react-native";

export const teamStyle = StyleSheet.create({
    container: {
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        overflow: "hidden",
    },
    mainLine: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    nameColumn: {
        width: "50%",
    },
    planColumn: {
        width: "25%",
    },
    factColumn: {
        width: "25%",
    },
    text: {
        fontSize: 18,
        textAlign: "left",
        color: "#3F3F3F"
    },
    line: {
        marginBottom: 8,
        marginTop: 8,
        marginHorizontal: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
    }
});
