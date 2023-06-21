import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CurrentPrice: {
        fontSize: 20, 
        letterSpacing: 1, 
        fontWeight: '600'
    },
    name: {
        color: 'black', 
        fontSize: 15, 
    },
    priceContainer:{
        padding: 15, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    percentContainer:{
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 3,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',


    },
    priceChange: {
        color: 'black',
        fontWeight: '500',
        fontSize: 17,
    }
})