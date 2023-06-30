import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles } from './Style'
import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'
import { useState } from 'react'
import ConfirmEmail from '../ConfirmEmail/ConfirmEmail'
import Login from '../Login/Login'


export default function Register({ navigation }) {

    const gottoConfirmEmail = () => {
        navigation.navigate("ConfirmEmail")
    }

    const [username, SetUsername] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [passwordReapeat, SetPasswordRepeat] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <CustomInput
                placeholder='Username'
                value={username}
                setvalue={SetUsername}
            />
            <CustomInput
                placeholder='Email'
                value={email}
                setvalue={SetEmail}
            />

            <CustomInput
                value={password}
                setValue={SetPassword}
                placeholder='Password'
                secureTextEntry
            />
            <CustomInput
                placeholder='Repeat Password'
                secureTextEntry
            />
            <Text style={styles.terms}>By regisering you confirm that you accept our Terms and conditions </Text>

            <CustomButton
                text='Register'
                bgColor='blue'
                fgColor='#E7EAF4'
                onPress={gottoConfirmEmail}
            />


            {/* <CustomButton
                text='Already have an account? LOG IN'
                bgColor="#E7EAF4"
            /> */}
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



        </View>
    )
}