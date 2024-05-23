import {StyleSheet} from "react-native";

export const scheduleStyle = StyleSheet.create({
    trainContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        paddingBottom:15
    },
    train: {
        borderRadius: 20,
        marginHorizontal:10,
        width: 353,
        backgroundColor: "#ffffff",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex:1,
        flexDirection:'row',
        alignItems:"center"
    },
    button_text: {
        fontSize: 14,
        color:'#1f1f1f',
        paddingBottom:10,
        paddingLeft:15,
        paddingHorizontal:5

    },
    button_text_dlit: {
        fontSize: 20,
        color:'#524f4f',
        paddingBottom:10,
        paddingLeft:15,
        justifyContent:'space-between'
    },


});

