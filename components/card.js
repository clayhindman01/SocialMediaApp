import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function card() {
  return (
    <View style={styles.card}>
        <Text>THIS IS FOR TESTING</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'dodgerblue',
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
