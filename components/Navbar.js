import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
        <Button 
            icon="home"
            style={ styles.buttonIconStyle }
            labelStyle={styles.iconStyle} 
            onPress={() => {alert("Pressed Home Button")}}
        />
        <Button 
            icon="plus" 
            style={ styles.buttonIconStyle }
            labelStyle={styles.iconStyle} 
            onPress={() => {alert("Pressed Plus Button")}}
        />
        <Button
            style={ styles.buttonIconStyle } 
            icon="account" 
            labelStyle={styles.iconStyle} 
            onPress={() => {alert("Pressed Account Button")}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 2,
    },
    iconStyle: {
        fontSize: 35,
        color: 'dodgerblue', 
    },
    buttonIconStyle: {
        padding: 0,
        textAlign: 'center'
    }
})
