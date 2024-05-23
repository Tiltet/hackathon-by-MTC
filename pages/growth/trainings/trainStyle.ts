import {StyleSheet} from "react-native";

export const growthStyle = StyleSheet.create({
    trainContainer: {
        flexDirection: 'column',
        alignItems: "center",
        width: '100%',
        height: '100%',
        paddingBottom:170

    },
    train: {
        justifyContent:'center',
        marginTop:10,
        borderRadius: 20,
        marginHorizontal:10,
        width: 353,
        height:194,
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
        fontSize: 20,
        color:'#1f1f1f',
        textAlign: "center",
        paddingBottom:10,
        justifyContent:'space-between',
        paddingHorizontal:5

    },
    button_text_dlit: {
        fontSize: 20,
        color:'#524f4f',
        textAlign: "center",
        paddingBottom:10,
        justifyContent:'space-between'
    },


});

