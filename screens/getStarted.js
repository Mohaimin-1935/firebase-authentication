import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { colors } from '../styles/constants';
import styles from '../styles/getStarted'
import globalStyles from '../styles/global'

import topImage from '../assets/icon.png'


export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>App</Text>
        <Image source={topImage} style={styles.topImage} />
      </View>

      <Text style={styles.subtitle}>Get Started</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={[globalStyles.button, globalStyles.primaryButton]}
        >
          <Text style={[globalStyles.buttonText, {color: colors.lightText}]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Signup')}
          style={[globalStyles.button, globalStyles.secondaryButton]}
        >
          <Text style={[globalStyles.buttonText, ]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

