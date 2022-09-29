import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle } from '../styles/styles'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'
import BlackLink from "../../../components/links/BlackLink"
import { TextInput } from 'react-native-paper'

import { login } from '../../../api/auth'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


    async function loginHandler(){
      // error handling
      if (!email) return
      if (!password) return

      const res = await login(email, password)
      console.log(res)

    }
  return (
    <View style={{...containerStyle, position: "relative", backgroundColor: ""}}>
        <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white", position: "relative", alignItems: "center", justifyContent: "center", width: "70%", height: "70%", borderRadius: 10}}>
            <Text style={screenTitleStyle}>Login</Text>
            <TextInput value={email} onChangeText={(e) => setEmail(e)} mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginTop: 25}} placeholder='Email:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput value={password} onChangeText={e => setPassword(e)} mode='outlined' outlineColor="#233223" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginBottom: 10}} placeholder='Password:' secureTextEntry autoCapitalize='none'/>
            <GreenBtn text="Login" onPressFunction={loginHandler}/>
            {/*todo: navigate to forgot password*/}
            <BlackLink text="Forgot password?" onPressFunction={() => console.log("aa")}/> 
            <BlackLink text="Don't have an account" onPressFunction={() => navigation.navigate("Register")}/>
            <Image style={{...knightImageStyle, position: "absolute", right: "-80%"}} source={require("../../../public/images/vikingKnight.jpg")}/>
        </View>
    
  </View>
  )
}

export default LoginScreen