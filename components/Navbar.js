import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button} from 'react-native-paper';

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
        height: 65,
        zIndex: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 40,
        color: 'dodgerblue',
        flex: 1,
        paddingLeft: 10,
        marginHorizontal: -10,
    },
    buttonIconStyle: {
        textAlign: 'center',
        alignContent: 'center',
        height: 50,
    }
})
