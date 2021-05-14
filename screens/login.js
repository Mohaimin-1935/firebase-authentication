import React, { useContext } from 'react'
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { useAuth } from '../context/authContext'
import styles from '../styles/auth'

import logo from '../assets/favicon.png'
import LoginForm from '../components/forms/loginForm';
import SocialConnect from '../components/forms/socialConnect';

export default function Login({ navigation }) {

  const { login } = useAuth()

  function toSignup() {
    navigation.navigate('Signup')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={logo} style={styles.logoImage} />
            <Text style={styles.title}>App</Text>
          </View>

          <View>
            <LoginForm />
            <TouchableOpacity>
              <Text style={styles.authInstruction}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <SocialConnect />

          <TouchableOpacity onPress={toSignup}>
            <Text style={styles.authInstruction}>Don't have an account? Create now!</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
