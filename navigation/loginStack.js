import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import Signup from '../screens/signup'
import React from 'react'
import GetStarted from '../screens/getStarted'
import { colors, fonts } from '../styles/constants'

const LoginStack = createStackNavigator()

export default function LoginStackContainer() {

  const loginStackOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <LoginStack.Navigator 
        initialRouteName="GetStarted"
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
        <LoginStack.Screen
          name="GetStarted"
          component={GetStarted}
          options={loginStackOptions}
        />
        <LoginStack.Screen
          name="Login"
          component={Login}
          // options={loginStackOptions}
        />
        <LoginStack.Screen
          name="Signup"
          component={Signup}
          // options={loginStackOptions}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}