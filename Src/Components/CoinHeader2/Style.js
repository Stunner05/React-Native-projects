import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30

    },
    tickerContainer: {
        fontWeight: 'bold',
        color: 'white',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",


    },
    tickerTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 5,
        fontSize: 17,

    },
    rankContainer: {
        // paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 5,
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: "grey",
        paddingHorizontal: 2,


    }
})