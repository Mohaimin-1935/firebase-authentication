import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import styles from '../../styles/auth'
import globalStyles from '../../styles/global'
import { useAuth } from '../../context/authContext'

export default function SocialConnect() {
  const { login } = useAuth()

  return (
    <View style={styles.socialConnectContainer}>
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: 'rgba(64, 100, 172, .25)', width: 320, position: 'relative', flexDirection: 'row', alignItems: 'center'}]}
      >
        <FontAwesome name="facebook" size={24} color='rgb(64, 100, 172)' style={[styles.inputIcon], {left: 0, marginRight: 10}} />
        <Text style={[globalStyles.buttonText, {color: 'rgb(64, 100, 172)'}]}>Sign in with facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: 'rgba(227, 65, 51, .25)', width: 320, position: 'relative', flexDirection: 'row', alignItems: 'center'}]}
      >
        <AntDesign name="google" size={24} color='rgb(227, 65, 51)' style={[styles.inputIcon], {left: 0, marginRight: 10}} />
        <Text style={[globalStyles.buttonText, {color: 'rgb(227, 65, 51)'}]}>
          Sign in with google</Text>
      </TouchableOpacity>
    </View>
  )

}