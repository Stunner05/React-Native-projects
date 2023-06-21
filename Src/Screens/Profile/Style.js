import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#F5F5F5',




    },
    text: {
        margin: 20,
        color: "black",
        fontSize: 17,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',



    },
    iconContainer: {
        flexDirection: "row",
        margin: 20,
        width: '90%',
        borderWidth: 1,
        height: 70,
        marginTop: 200,
        marginRight: 10,
        // maxWidth: '80%',
        padding: 10,
        fontWeight: "bold",
        borderRadius: 5,
        justifyContent: "space-around",
        backgroundColor: '#F5F5F5',

        alignContent: "flex-start",
        // flex: 1,



    },
    texts: {
        borderRightWidth: 1,
        // marginleft: -10,
        // padding: 
        flex: 1,
        justifyContent: "space-evenly",
        alignContent: "flex-start",
        // marginHorizontal: 5
        // margin: 10,
    },
    title: {
        color: 'black',
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 3,
        justifyContent: "center",
        marginLeft: 5

    },
    Verifytext: {
        borderRightWidth: 0,
        // padding: 
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
    },
    midContainer: {

        borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#FFFAFA',
    }
})