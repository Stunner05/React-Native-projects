import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { styles } from './Style'
import Header from '../../Components/Header/Header'




export default function Login({ navigation }) {
    const gotoDashboard = () => {
        navigation.navigate("Dashboard")
    }
    const gotoSignUp = () => {
        navigation.navigate("SignUp")
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='UserName' style={styles.text} />
            <TextInput placeholder='Password' style={styles.text2} />
            <View>
                <Header />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}
            >
                <Pressable
                    style={styles.loginBtn}
                    onPress={gotoDashboard}
                >
                    <Text
                        style={{ fontSize: 20, color: "white" }}
                    >Login</Text>
                </Pressable>
                <View style={styles.ForgotSign}>
                    <Text style={{color: "white", fontSize: 15}}>Forgot Password?</Text>
                </View>
                <Pressable
                    onPress={gotoSignUp}
                    style={styles.SignupBtn}>
                    <Text style={{ color: "yellow", fontSize: 15 }}>SIGN UP</Text>
                </Pressable>
            </View>
        </View>
    )
}