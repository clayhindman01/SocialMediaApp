import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Navbar() {
  return (
    <SafeAreaView style={styles.navbar}>
        <Text>Test Test Test</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: 60,
    }
})
