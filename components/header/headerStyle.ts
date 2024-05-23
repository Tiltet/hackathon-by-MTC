import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },
    logo: {

    },
    logo_image: {
        width: 140,
        height: 45
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
    },
    logo_icon: {
        marginLeft: 20,
        width: 24,
        height: 24
    },
    text: {
        fontSize: 50,
    }
});
