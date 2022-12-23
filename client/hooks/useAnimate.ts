import { Animated } from "react-native"
import { useRef } from "react"
const useAnimate = (startValue: number, endValue: number, durationInMiliseconds: number) => {
    const ref = useRef(new Animated.Value(startValue)).current

    const forwardAnim = (): any => {
        Animated.timing(ref, {
            toValue: endValue,
            duration: durationInMiliseconds,
            useNativeDriver: false
        }).start()
    }

    const backwardAnim = (): any=> {
        Animated.timing(ref, {
            toValue: startValue,
            duration: durationInMiliseconds,
            useNativeDriver: false
        }).start()
    }

    return [ref, forwardAnim, backwardAnim]
}

export default useAnimate