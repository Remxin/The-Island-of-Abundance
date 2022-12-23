/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';

// ___ PROVIDERS ___
import { Provider as PaperProvider } from 'react-native-paper';

// ___ ROUTER ___
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ___ SCREENS ___
import LoadingScreen from './views/loading/LoadingScreen';
import AuthScreen from './views/auth/AuthScreen';
import HomeScreen from './views/home/HomeScreen';

// ___ REDUX ___
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
// - reducers
import userReducer from './features/user';
import soundReducer from "./features/soundsMusic"
import gameDataReducer from './features/gameData';

// ___ CONTEXTS ___
import { SocketContext } from './contexts/SocketContext';

// ___ HOOKS ___
import useSocket from './hooks/useSocket';
import { useBuildings } from './hooks/data/useBuildings';

// ___ TYPES ___
import { useSocketType } from './hooks/useSocket';

import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LeafLoading from './components/loading/LeafLoading';




const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    sound: soundReducer,
    gameData: gameDataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
})


// GAME STACK
const HomeStack = createNativeStackNavigator()

const HomeTabs = () => {
  const socket = useSocket()
  // console.log(socket)
  const { loading: buildingsLoading, error: buildingsError } = useBuildings(socket)

  useEffect(() => {
    socket.connectToServer()
  }, [])
  console.log(buildingsLoading)

  if (buildingsLoading) return <LeafLoading text="Loading game data..."/>
  if (buildingsError) return <Text>{ buildingsError }</Text>
  return (
    <SocketContext.Provider value={socket}>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ header: () => null }}/>
      </HomeStack.Navigator>
    </SocketContext.Provider>
  )
}


// MAIN STACK
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
            <AppStack.Screen name="HomeStack" component={HomeTabs} options={{ header: () => null }}/>
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
