import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    wrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: '#e7e7e7',
    },
    container: {
        paddingHorizontal: 15,
        marginTop: 80,
        borderColor: '#f6b4b4',
        shadowColor: '#8282ad',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 20
    },
    image_container: {
        display: 'flex',
        alignItems: "center",
    },
    image: {
        marginBottom: 30,
        width: 250,
        height: 80,
    },
    text_login: {
        fontSize: 16,
    },
    input: {
        fontSize: 18,
        height: 50,
        marginVertical: 5,
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#7f858f',
        opacity: 0.8,
    },
    text_password: {
        marginTop: 20,
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        paddingVertical: 15,
        minWidth: '100%',
        backgroundColor: '#ff0101',
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 10,
        color:'red',
    },
    button_text: {
        fontSize: 18,
        color: '#fff',
    }
});
