import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from '../screens/home'
import HomeTwo from '../screens/homeTwo'
import { colors, fonts } from '../styles/constants'

const HomeStack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.lightText,
        headerTitleStyle: {
          fontFamily: fonts.bold,
        },
      }}
    >
      <HomeStack.Screen name="Home" 
        component={Home}
        options={{ title: 'App Name', }} 
      />
      <HomeStack.Screen name="HomeTwo" 
        component={HomeTwo} 
        options={{ title: 'Home 2', }} 
      />
    </HomeStack.Navigator>
  )
}