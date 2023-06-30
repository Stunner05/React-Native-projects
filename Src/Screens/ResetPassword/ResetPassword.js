import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'


const ResetPassword = () => {
  return (
    <View>
          <CustomInput placeholder='Reset Password'/>
          <CustomButton text='Reset' bgColor='#FFCC33'/>
      <Text>ResetPassword</Text>
    </View>
  )
}

export default ResetPassword