import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle } from '../styles/styles'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'
import BlackLink from "../../../components/links/BlackLink"

// hooks
import { login } from '../../../api/auth'
import useAuth from '../../../hooks/useАuth'

// components
import AuthInput from '../../../components/inputs/AuthInput'
import SlideUpModal from '../../../components/modals/SlideUpModal'

// validations
import { validateEmail, validateUserPassword } from '../../../validations/auth'
 

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // errors
  const [connectionError, setConnectionError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // refferences
  const errorShowTimeout = useRef() as any
  const { setToken } = useAuth()


    async function loginHandler(){
      setPasswordError("")
      if (!email) return
      if (!password) return

      // if (!validateEmail(email)) return setEmail("This email is not valid")
      // if (!validateUserPassword(password)) return setPassword("Password must contain letter, digit, special character and be at least 6 characters long")

      try {
        const res = await login(email, password)
        if (res.err) return setPasswordError(res.err + "")
        if (res.data.err) setPasswordError(res.data.err)
        if (res.data) {
          const isWorking = await setToken(res.data.authToken)
          navigation.navigate("HomeStack")
        }

      } catch (err) {
        setConnectionError("Network request failed")
        errorShowTimeout.current = setTimeout(() => {
          setConnectionError("")
        }, 3000)
      }

    }
  return (
    <View style={{...containerStyle.container, position: "relative", backgroundColor: ""}}>
        <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white", position: "relative", alignItems: "center", justifyContent: "center", width: "70%", height: "70%", borderRadius: 10}}>
            <Text style={screenTitleStyle.style}>Login</Text>
            <AuthInput onChangeText={setEmail} placeholder="Email: " error={emailError} style={{ marginBottom: 5 }} validationFunction={validateEmail} onErrorText="This email is not valid"/>
            <AuthInput onChangeText={setPassword} placeholder="Password: " error={passwordError} style={{ marginBottom: 5 }} secureTextInput={true} validationFunction={validateUserPassword} onErrorText="Password must contain letter, digit, special character and be at least 6 characters long"/>
            {/* <TextInput value={email} onChangeText={(e) => setEmail(e)} mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginTop: 25}} placeholder='Email:' autoCapitalize="none" keyboardType="email-address"/> */}
            {/* <TextInput value={password} onChangeText={e => setPassword(e)} mode='outlined' outlineColor="#233223" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginBottom: 10}} placeholder='Password:' secureTextEntry autoCapitalize='none'/> */}
            <GreenBtn text="Login" onPressFunction={loginHandler}/>
            {/*todo: navigate to forgot password*/}
            <BlackLink text="Forgot password?" onPressFunction={() => navigation.navigate("Forgot password")}/> 
            <BlackLink text="Don't have an account" onPressFunction={() => navigation.navigate("Register")}/>
            <Image style={{...knightImageStyle.style, position: "absolute", right: "-80%"}} source={require("../../../public/images/vikingKnight.jpg")}/>
        </View>
        <SlideUpModal visible={!!connectionError} text={connectionError}/>
  </View>
  )
}

export default LoginScreen