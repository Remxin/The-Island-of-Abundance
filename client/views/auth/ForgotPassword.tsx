import { View, Text } from 'react-native'
import { useState } from 'react'

// styles
import { containerStyle, knightImageStyle, screenTitleStyle, textInputStyle } from './styles/styles'

// components
import AuthInput from '../../components/inputs/AuthInput'
import GreenBtn from '../../components/buttons/greenBtn/GreenBtn'

// validations
import { validateEmail } from '../../validations/auth'

// hooks
import usePasswordReset from '../../hooks/usePasswordReset'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const { sendResetEmail } = usePasswordReset()



    function handleEmailSending() {
        if (!email) return setEmailError("Please enter an email")
        if (!validateEmail(email)) return setEmailError("This is not a valid email")
        sendResetEmail(email)
        
    }
  return (
    <View style={{...containerStyle.container, position: "relative", backgroundColor: ""}}>
        <View style={{ backgroundColor: "white", position: "relative", alignItems: "center", justifyContent: "center", width: "70%", height: "70%", borderRadius: 10}}>
            <AuthInput placeholder='Enter your email: ' error={emailError} onChangeText={setEmail} validationFunction={validateEmail} onErrorText="This is not a valid email" style={{ marginBottom: 10 }}/>
            <GreenBtn text="Send reset email" onPressFunction={handleEmailSending} style={{ width: 150}}/>
        </View>
  </View>
  )
}

export default ForgotPassword