import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
// import Icon from '@expo/vector-icons/AntDesign'
import Icon from '@expo/vector-icons/EvilIcons'

// import { AntDesign } from '@expo/vector-icons';


const CustomButton = ({ text, bgColor, fgColor, icon }
) => {
    return (
        <View style={[styles.container, bgColor ? { backgroundColor: bgColor } : {}]}>
            <Pressable >
                <Text
                    style={[
                        styles.Text,
                        fgColor ? { color: fgColor } : {}
                    ]}>
                    {text}</Text>


            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        borderRadius: 5,
        backgroundColor: `yellow`,
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        // marginBottom: 50



    },
    Text: {
        // flex: 1,
        fontWeight: 'bold',


    },
    appButtonContainer: {
        flex: 1,
        width: 290,
        // alignSelf: 'flex-end',
        padding: 0,
        justifyContent: 'space-evenly',
        marginVertical: 5,


    },
    appButton: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'flex-start',
        marginVertical: 5,
    }
}
)

export default CustomButton;