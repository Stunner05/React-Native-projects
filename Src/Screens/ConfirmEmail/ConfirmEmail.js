import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton';
import { styles } from './Style';

const ConfirmEmail = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Confirm Email</Text>

            <Text>Confirm code</Text>
            <CustomInput
                placeholder="Enter your confimation code"
            />
            <CustomButton
                text="Confirm"
                fgColor="white"
                bgColor="blue"
            />

            <Text>Username</Text>

        </View>
    )
}


export default ConfirmEmail;