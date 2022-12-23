import { View, Text, TextInput, StyleSheet, TextStyle, StyleProp, KeyboardTypeOptions } from 'react-native'
import React, { MutableRefObject, forwardRef, useState, useEffect } from 'react'

type componentProps = {
    // ref?: MutableRefObject<TextInput>,
    onChangeText?: Function,
    error?: string,
    onErrorText?: string
    placeholder?: string,
    style?: StyleProp<TextStyle>,
    type?: KeyboardTypeOptions,
    secureTextInput?: boolean,
    autoFocus?: boolean,
    validationFunction?: (text: string) => boolean
}
const AuthInput = ({ onChangeText = undefined, error = "", onErrorText = "", placeholder = "", style = {}, type = "default", secureTextInput = false, autoFocus = false, validationFunction = undefined}: componentProps, ref: MutableRefObject<TextInput>) => {
    const [focused, setFocused] = useState(false)
    const [myText, setMyText] = useState("")
    const [errorText, setErrorText] = useState(error)

    useEffect(() => {
        setErrorText(error)
    }, [error])
    function onChangeHandler(e: string) {
        setMyText(e)
        if (!onChangeText) return
        onChangeText(e)
    }

    function blurHandler() {
        setFocused(false)
     
        if (validationFunction && myText) {
            const valid = validationFunction(myText)
            if (!valid) setErrorText(onErrorText)
        }
    }

    function focusHandler() {
        setFocused(true)
        setErrorText("")
    }

    const colorTheme = focused ? "green" : (errorText ? "tomato" : "gray")

  return (
    <View style={style}>
      <TextInput ref={ref} autoFocus={autoFocus} onChangeText={e => onChangeHandler(e)} onFocus={focusHandler} onBlur={blurHandler} placeholder={placeholder} placeholderTextColor={colorTheme} keyboardType={type} secureTextEntry={secureTextInput} autoCapitalize="none"
      style={[staticStyles.input, {
         borderColor: colorTheme,
         color: errorText ? "tomato" : "black"

        }]}/>
        <Text style={[staticStyles.errorText, { display: errorText ? "flex" : "none"}]}>{errorText}</Text>
    </View>
  )
}

const staticStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 140,
        height: 25,
        borderRadius: 5,
        textAlign: "center"
    },

    errorText: {
        fontSize: 10,
        color: "tomato",
        textAlign: "center",
        maxWidth: 140
    }
})

//@ts-ignore
export default forwardRef(AuthInput)