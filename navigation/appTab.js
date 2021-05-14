import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeStackNavigator from './homeStack'
import ProfileStackNavigator from './profileStack';
import { colors } from '../styles/constants';

const AppTab = createBottomTabNavigator()

export default function AppTabContainer() {

  // const getTabBarVisibility = (route) => {
  //   const routeName = getFocusedRouteNameFromRoute(route) ?? ''
  //   //will not show the bottom tab navigator in these routes
  //   if (routeName === 'OtherOne') {
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={({ route }) => ({
          //show icons
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              if (focused) {
                return (
                  <Ionicons name="home-outline" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Ionicons name="home-outline" size={20} color={colors.darkText} />
                )
              }
            } else if (route.name === 'Profile') {
              if (focused) {
                return (
                  <FontAwesome5 name="user-circle" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <FontAwesome5 name="user-circle" size={20} color={colors.darkText} />
                )
              }
            } else return <></>
          }
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <AppTab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={({ route }) => ({
            // tabBarVisible: getTabBarVisibility(route)
          })}
        />
        <AppTab.Screen
          name="Profile"
          component={ProfileStackNavigator}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  )
}