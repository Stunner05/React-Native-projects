import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor
        paddingTop: 50,

    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 3,

    },
    text: {
        marginRight: 5,
        color: 'black'

    },
    coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
        padding: 15,


    },
    rank: {
        fontWeight: 'bold',
        color: 'white',
        // borderR
    },
    rankContainer: {
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
        backgroundColor: 'grey',
        paddingHorizontal: 5,
        borderRadius: 5,
        // borderR
    },
})