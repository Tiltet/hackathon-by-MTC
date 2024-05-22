import {StyleSheet} from "react-native";

export const page = StyleSheet.create({
    header: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerImage:{
        height: 40,
        width: 40,
    },
    headeImageContainer:{
      display: "flex",
      flexDirection: "row",
    },
    image:{
        marginLeft: 20,
        width: 120,
        height: 40

    },
    header_font:{
        fontSize: 20,
    },
    profile_container:{
        alignSelf:"center",
        height: 150,
        width: 450,
        display: "flex",
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#e8e7e6',
    },
    profileImage: {
        height: 100,
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    profileTextContainer: {
        marginLeft: 20,
        flexWrap: 'wrap',
    },
    profileText: {
        fontSize: 35,
    },
    infoContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop:15,
        width: 350,
        height: 150,
        borderWidth: 1,
        alignSelf:"center",
        borderRadius: 10,
        justifyContent: "space-around",
        borderColor:"#e3e0da",

    },
    outerContainer:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    mainInfoText:{
    fontSize: 25    ,
        fontWeight: "700",
        fontFamily: "Montserrat",
    },
    infoText:{
    fontSize: 15,
        color :"#aba9a6"
    },
    buttonImg:{
        height: 70,
        width: 70,
    },
    buttonContainer:{
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center"

    },
    mainButtonContainer:{
        display: "flex",
        alignSelf:"center",
        width:"100%",
        justifyContent:"space-around",

    },
    button:{
        height: 150,
        width: 150,
        alignItems:"center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderRadius:15,
    },
    buttonText:{
        fontSize: 15,
        fontWeight: "700",
    }

});