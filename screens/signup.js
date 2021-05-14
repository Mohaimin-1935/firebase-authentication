import React, { useContext } from 'react'
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { useAuth } from '../context/authContext'
import styles from '../styles/auth'

import logo from '../assets/favicon.png'
import LoginForm from '../components/forms/loginForm';
import SocialConnect from '../components/forms/socialConnect';
import RegistrationForm from '../components/forms/registrationForm';

export default function Signup({ navigation }) {

  const { login } = useAuth()

  function toLogin() {
    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>App</Text>
        </View>

        <RegistrationForm />

        <SocialConnect />

        <TouchableOpacity onPress={toLogin}>
          <Text style={styles.authInstruction}>Already have an account? Log in!</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  )
}
