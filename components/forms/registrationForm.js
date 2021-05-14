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
  username: yup.string().min(3, "At least 3 character!"),
  fullname: yup.string().min(3, "At least 3 character!"),
  password: yup.string().min(6, "At least 6 character!"),
})

export default function RegistrationForm() {
  const { signup, loading, error } = useAuth()

  return (
    <Formik
      initialValues={{
        fullname: '',
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={fomrValidation}
      onSubmit={(values) => {
        signup(values.email, values.password)
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
              placeholder='Full Name'
              onChangeText={props.handleChange('fullname')}
              value={props.values.fullname}
              icon='ios-list-circle'
            />
            <Text style={styles.errorText}>
              {props.touched.fullname && props.errors.fullname}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
              icon='ios-person-circle'
            />
            <Text style={styles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>
          </View>

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
                  Sign up
                </Text>
              )
            }
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}