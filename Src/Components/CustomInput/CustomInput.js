import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
// import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'

const CustomInput = ({ value, setvalue, placeholder, secureTextEntry }) => {

    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                setvalue={setvalue}
                placeholder={placeholder}
                style={styles.text}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        
    },
    text: {

        // marginTop: 200,
        marginVertical: 5,
        borderRadius: 30,
        width: 320,
        // borderWidth: 1,
        marginHorizontal: 20,
        borderColor: "#e8e8e8",
        height: 60,
        // marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: 'center',
        // backgroundColor: "blue",
        alignItems: "center",
        padding: 16,


    },
})

export default CustomInput;