import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { styles } from './Style'
import Header from '../../Components/Header/Header'
import CustomButton from '../../Components/CustomButton'
// import CustomInput from '../../Components/CustomInput/CustomInput'
import ResetPassword from '../ResetPassword/ResetPassword'





export default function Login({ navigation }) {
    const gotResetPassword = () => {
        navigation.navigate("ResetPassword")
    }
    const gotoDashboard = () => {
        navigation.navigate("Dashboard")
    }
    const gotoSignUp = () => {
        navigation.navigate("SignUp")
    }
    return (
        <View style={styles.container}>
            {/* <image source={}/>  */}
            <TextInput
                placeholder='UserName'
                style={styles.text}
            />
            <TextInput
                placeholder='Password'
                style={styles.text2}
                secureTextEntry={true}
            />
            <View>
                {/* <Header /> */}
            </View>
            <View style={{ justifyContent: "center", }}
            >
                <Pressable
                    style={styles.loginBtn}
                    onPress={gotoDashboard}
                >
                    <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
                </Pressable>
                <View style={styles.ForgotSign}>
                    <Pressable onPress={gotResetPassword}>
                        <Text style={{ color: "grey", fontSize: 15 }}>Forgot Password?</Text>
                    </Pressable>
                </View>
                <CustomButton
                    icon="sc-facebook"
                    text='Sign in with Facebook'
                    fgColor="#4765A9"
                    bgColor="#E7EAF4"

                />
                <CustomButton
                    icon="sc-google-plus"
                    text='Sign in with Google'
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <Pressable
                    style={styles.SignupBtn}
                    onPress={gotoSignUp}
                >
                    <Text style={{ color: "grey", fontSize: 15 }}>Don't have an account? SIGN UP</Text>
                </Pressable>
            </View>
        </View>

    )
}