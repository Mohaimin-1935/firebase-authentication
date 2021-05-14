import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/authContext';


export default function Profile({navigation}) {

  const {logout} = useAuth()

  function toEditProfile() {
    navigation.navigate('EditProfile')
  }
  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
      <TouchableOpacity onPress={toEditProfile}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
