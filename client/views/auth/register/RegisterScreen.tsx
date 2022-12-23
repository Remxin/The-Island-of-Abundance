import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle, textInputStyle } from '../styles/styles'
import { TextInput } from 'react-native-paper'


// hooks
import { register } from "../../../api/auth"
import useAuth from '../../../hooks/useАuth'

// components
import AuthInput from '../../../components/inputs/AuthInput'
import BlackLink from '../../../components/links/BlackLink'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'
import SlideUpModal from '../../../components/modals/SlideUpModal'

// validations
import { validateEmail, validateUserPassword, validateUserNick } from '../../../validations/auth'

type componentType = {
  navigation: any
}

//@ts-ignore
const RegisterScreen: React.FC = ({ navigation }) => {
  const { setToken } = useAuth()


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // errors
  const errorShowTimeout = useRef() as any
  const [connectionError, setConnectionError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [emailError, setEmailError] = useState("")


  async function handleRegister() {
    // error handling 
    if (!name) return
    if (!email) return
    if (!password) return 

    // validations
    if (!validateUserNick(name)) return setEmailError("User nick should be at least 8 characters long and shouldn't be offensive")
    if (!validateEmail(email)) return setEmailError("This email is not valid")
    if (!validateUserPassword(password)) return setPasswordError("Password should be at least 6 characters long and contain at least one letter, digit and special character")
    try {
      const res = await register(name, email, password) // todo: create useAuth, and keep data in redux
      if (res.err) {
        setPasswordError(res.err + "")
        return
      }

      if (res.data) {
        const isWorking = await setToken(res.data.authToken)
        navigation.navigate("HomeStack")
      }



    } catch (err) {
      setConnectionError(err + "")
      errorShowTimeout.current = setTimeout(() => {
        setConnectionError("")
      }, 3000)
    }
  }

  

  return (
    <View style={{...containerStyle.container, position: "relative"}}>
       <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white",position: "relative", alignItems: "center", justifyContent: "center", width: "70%", height: "70%", borderRadius: 10}}>
            <Text style={screenTitleStyle.style}>Register</Text>
            <AuthInput onChangeText={setName} placeholder="Name: " validationFunction={validateUserNick} onErrorText="User nick should be at least 8 characters long and shouldn't be offensive"/>
            <AuthInput onChangeText={setEmail} placeholder="Email: " validationFunction={validateEmail} onErrorText="This email is not valid"/>
            <AuthInput onChangeText={setPassword} placeholder="Password: " secureTextInput={true} validationFunction={validateUserPassword} onErrorText="Password should be at least 6 characters long and contain at least one letter, digit and special character" style={{ marginBottom: 5 }}/>
            <GreenBtn text="Register" onPressFunction={handleRegister}/>
            <BlackLink text="Already have an account" onPressFunction={() => navigation.navigate("Login")}/>
            <Image style={{...knightImageStyle.style, position: "absolute", right: "-80%"}} source={require("../../../public/images/knight.jpg")}/>
          </View>
        <SlideUpModal visible={!!connectionError} text="Failed connecting to server"/>
  </View>
  )
}


export default RegisterScreen