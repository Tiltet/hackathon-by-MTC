import { StyleSheet } from "react-native";

export const newsStyle = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    news_image_container: {
        paddingHorizontal: 10,
        width: 360,
        paddingBottom: 20,
        marginTop: 20,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    news_image: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    news_block: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        marginTop: 20,
    },
    news_block_title: {
        fontSize: 14,
        fontWeight: "600",
    },
    news_block_description: {
        color: "#8F8686",
        fontSize: 12,
    },
    news_block_image: {
        width: 140,
        height: 100,
        borderRadius: 20,
    },
    news_text_block: {
        flex: 1,
        paddingLeft: 10,
        display: "flex",
        flexDirection: "column",
    }
});
