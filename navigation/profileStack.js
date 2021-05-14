import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Profile from '../screens/profile'
import EditProfile from '../screens/editProfile'
import { colors, fonts } from '../styles/constants'

const ProfileStack = createStackNavigator()

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName={'Profile'}
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
      <ProfileStack.Screen name="Profile" 
        component={Profile}
        options={{ title: 'Profile', }} 
      />
      <ProfileStack.Screen name="EditProfile" 
        component={EditProfile} 
        options={{ title: 'Edit Profile', }} 
      />
    </ProfileStack.Navigator>
  )
}