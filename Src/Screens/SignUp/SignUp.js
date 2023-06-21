import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles } from './Style'
import Login from '../Login/Login'

export default function Register() {
    const gottoLogin = () => {
        navigation.navigate("Login")
    }


    return (
        <View style={styles.container}>
            <TextInput  placeholder='email' style={styles.text}/>
            <TextInput  placeholder='UserName' style={styles.text}/>
            <TextInput placeholder='password' style={styles.text} />
            <TextInput placeholder='Repeat Password' style={styles.text} />
            <Text>Register</Text>
            <Text>Already have an account?</Text>
            <Text>LOG IN</Text>
        </View>
    )
}