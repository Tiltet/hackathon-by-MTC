import {StyleSheet} from "react-native";

export const profileStyle = StyleSheet.create({
    wrapper: {
        paddingTop: 5,
    },
    container: {
        marginHorizontal: 15,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    headerImage:{
        height: 26,
        width: 26,
    },
    headerImageContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    image:{
        width: 140,
        height: 45
    },
    header_font:{
        fontSize: 20,
    },
    profile_container: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: '#e8e7e6',
    },
    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 10,
    },
    profileTextContainer: {
        marginLeft: 20,
        flexWrap: 'wrap',
    },
    profileText: {
        fontSize: 28,
    },
    infoContainer: {
        padding: 10,
        marginTop: 15,
        width: '100%',
        borderWidth: 1,
        shadowColor: "#000",
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        alignSelf: "center",
    },
    outerContainer:{
        paddingHorizontal: 5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    mainInfoText: {
        fontSize: 22,
        fontWeight: "700",
        fontFamily: "Montserrat",
    },
    underInfo: {
      paddingTop: 12,
    },
    infoText: {
        fontSize: 14,
        color: "#aba9a6"
    },
    buttonImg: {
        height: 85,
        width: 85,
    },
    mainButtonContainer: {
        marginBottom: 20,
        display: "flex",
        alignSelf: "center",
        width: "100%",
        justifyContent:"space-around",
    },
    buttonContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    button: {
        height: 150,
        width: 170,
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "700",
    }
});
