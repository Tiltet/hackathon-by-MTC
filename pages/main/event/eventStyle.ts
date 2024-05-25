import { StyleSheet } from "react-native";

export const eventStyle = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    event: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 10,
        paddingHorizontal: 8,
        marginBottom: 15,
        borderTopWidth: 15,
        borderTopColor: "red",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    event_data: {
        fontSize: 16,
        color: '#6C6767',
    },
    event_title: {
        paddingTop: 5,
        fontSize: 18,
    }
});
