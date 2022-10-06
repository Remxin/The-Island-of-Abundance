/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// providers
import { Provider as PaperProvider } from 'react-native-paper';

// router
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import LoadingScreen from './views/loading/LoadingScreen';
import AuthScreen from './views/auth/AuthScreen';
import HomeScreen from './views/home/HomeScreen';

// redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

import userReducer from './features/user';
import soundReducer from "./features/soundsMusic"

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    sound: soundReducer
  }
})

const HomeTabs = () => {
  return (
    <View></View>
  )
}

const AppStack = createNativeStackNavigator()
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReduxProvider store={reduxStore}>
      <PaperProvider>
        <NavigationContainer>
          <AppStack.Navigator>
            <AppStack.Screen name="Loading" component={LoadingScreen} options={{header: () => null}}/>
            <AppStack.Screen name="Auth" component={AuthScreen} options={{header: () => null}}/>
            <AppStack.Screen name="Home" component={HomeScreen} options={{ header: () => null }}/>
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    width: "100%",
    height: "100%"
  }
});

export default App;
