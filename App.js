import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import AppTabContainer from './navigation/appTab';
import { AuthProvider, useAuth } from './context/authContext'
import LoginStackContainer from './navigation/loginStack';
import { colors } from './styles/constants';

export default function App() {

  let [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (fontsLoaded) {
    return (
      <AuthProvider>
        <CurrentScreen />
      </AuthProvider>
    )
  } else {
    return <AppLoading />
  }

}

function CurrentScreen() {
  const {isLoggedIn} = useAuth()
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.statusBar} barStyle="dark-content"/>
      {isLoggedIn ? <AppTabContainer /> : <LoginStackContainer />} 
    </>
  )
}