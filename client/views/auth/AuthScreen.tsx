import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthMenuScreen from './authMenu/AuthMenuScreen';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './register/RegisterScreen';

const AuthStack = createNativeStackNavigator()

const AuthScreen = () => {
    
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="AuthMenu" component={AuthMenuScreen} options={{ header: () => null}}/>
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="Register" component={RegisterScreen}/>
    </AuthStack.Navigator>
  )
}



export default AuthScreen