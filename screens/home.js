import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {

  function toHomeTwo() {
    navigation.navigate('HomeTwo')
  }

  return (
    <View style={styles.container}>
      <Text>Main Home Screen</Text>
      <TouchableOpacity onPress={toHomeTwo}>
        <Text>Go to second home</Text>
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
