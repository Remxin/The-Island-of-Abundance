import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle, textInputStyle } from '../styles/styles'
import { TextInput } from 'react-native-paper'

import BlackLink from '../../../components/links/BlackLink'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'

import { register } from "../../../api/auth"

type componentType = {
  navigation: any
}

//@ts-ignore
const RegisterScreen: React.FC = ({ navigation }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleRegister() {
    // error handling 
    if (!name) return
    if (!email) return
    if (!password) return 
    try {
      const res = await register(name, email, password) // todo: create useAuth, and keep data in redux
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  

  return (
    <View style={{...containerStyle.container, position: "relative"}}>
       <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white",position: "relative", alignItems: "center", justifyContent: "center", width: "70%", height: "70%", borderRadius: 10}}>
            <Text style={screenTitleStyle.style}>Register</Text>
            <TextInput value={name} onChangeText={(e) => setName(e)} mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginTop: 28}} placeholder='Name:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput value={email} onChangeText={(e) => setEmail(e)} mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25}} placeholder='Email:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput value={password} onChangeText={(e) => setPassword(e)} mode='outlined' outlineColor="#233223" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginBottom: 8}} placeholder='Password:' secureTextEntry autoCapitalize='none'/>
            <GreenBtn text="Register" onPressFunction={handleRegister}/>
            <BlackLink text="Already have an account" onPressFunction={() => navigation.navigate("Login")}/>
            <Image style={{...knightImageStyle.style, position: "absolute", right: "-80%"}} source={require("../../../public/images/knight.jpg")}/>
          </View>
    
  </View>
  )
}


export default RegisterScreen