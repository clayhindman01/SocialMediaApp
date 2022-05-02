import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function card() {
  return (
    <View style={styles.card}>
        <Text onPress={() => alert("testing")} onLongPress={() => alert("testing long press")} >THIS IS FOR TESTING</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
})
