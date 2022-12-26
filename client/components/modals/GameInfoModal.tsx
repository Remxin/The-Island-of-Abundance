import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState } from 'react'
import { GameInfoButtonContext } from '../../contexts/GameInfoButtonContext'

// components
import LightWoodenBtn from '../buttons/lightWoodenBtn/LigthWoodenButton'
import CloseBtn from '../buttons/CloseBtn'
import Buildings from '../menuSections/Buildings'
import Cards from '../menuSections/Cards'
import Dangers from '../menuSections/Dangers'
import Developements from '../menuSections/Developements'

type componentType = {
    visible: boolean,
    setVisible: Function
}

const ComponentContent = ({ section }: {section: string}) => {
 
    switch(section) {
        case "How to play":
            return <></>
        case "Buildings":
            return <Buildings/>
        case "Cards":
            return <Cards/>
        case "Dangers":
            return <Dangers/>
        case "Developements":
            return <Developements/>
        default:
            return <></>
    }
   
}
const GameInfoModal = ({ visible, setVisible}: componentType) => {
    const [buttonSelected, setButtonSelected] = useState("How to play")
    if (!visible) return <></>
  return (
    <View style={styles.container}>
        <Image style={styles.bgcImage} source={require("../../public/images/wood-panel.jpg")}/>
        <View style={styles.buttonsPanel}>
            {/* @ts-ignore */}
            <GameInfoButtonContext.Provider value={{ setBtn: setButtonSelected, selectedBtn: buttonSelected }}>
                <Image style={styles.buttonsPanelImage} source={require("../../public/images/dark-wood.jpg")}/>
                <CloseBtn position={{x: 0, y: 5}} onClickFunction={() => setVisible(false)}/>
                <LightWoodenBtn text="How to play" position={{x: 10, y: 10}} onClickFunction={() => console.log("")}/>
                <LightWoodenBtn text="Cards" position={{x: 10, y: 10}} onClickFunction={() => console.log("")}/>
                <LightWoodenBtn text="Buildings" position={{x: 10, y: 10}} onClickFunction={() => console.log("")}/>
                <LightWoodenBtn text="Developements" position={{x: 10, y: 10}} onClickFunction={() => console.log("")}/>
                <LightWoodenBtn text="Dangers" position={{x: 10, y: 10}} onClickFunction={() => console.log("")}/>
            </GameInfoButtonContext.Provider>
        </View>
        <ComponentContent section={buttonSelected}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    bgcImage: {
        position: "absolute",
        width: "100%",
        heigth: "100%",
        resizeMode: "cover"
    },

    buttonsPanel: {
        justifyContent: "center",
        width: "100%",
        height: 80,
        flexDirection: "row"
    },
    buttonsPanelImage: {
        position: "absolute",
        maxHeight: 80,
        resizeMode: "stretch"
    }

})

export default GameInfoModal