import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import styles from '../../styles/auth'
import globalStyles from '../../styles/global'
import CustomTextInput from '../input/customTextInput'
import { useAuth } from '../../context/authContext'
import { colors } from '../../styles/constants'

const fomrValidation = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Invalid email address!'),
  password: yup.
    string().
    required('Password is required!'),
})

export default function LoginForm() {
  const { login, loading, error } = useAuth()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={fomrValidation}
      onSubmit={(values) => {
        login(values.email, values.password)
      }}
    >
      {(props) => (
        <View style={styles.formContainer}>
          
          {error && (
            <Text style={[styles.center, { color: "red", marginVertical: 10 }]}>
              {error.message}
            </Text>
          )}

          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder='Email Adrress'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              icon='ios-mail'
            />
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder='Password'
              securedTextEntry={true}
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              icon='md-lock-open'
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
          </View>

          <TouchableOpacity
            style={[globalStyles.button, globalStyles.primaryButton, { width: 320 }]}
            onPress={props.handleSubmit}
          >
            {
              loading ? (
                <ActivityIndicator size='small' color='white' />
              ) : (
                <Text style={[globalStyles.buttonText, { color: colors.lightText }]}>
                  Log in
                </Text>
              )
            }
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}