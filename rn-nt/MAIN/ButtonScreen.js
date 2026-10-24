import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonScreen = (props) => {
    const handlePress = () => {
        console.log('Button Clicked');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Button Screen</Text>

            <Button
                title="Click Me"
                color='darkblue'
                onPress={handlePress}
            ></Button>

            <TouchableOpacity styles={styles.touchBtn} 
            onPress={() => console.log("touch element clicked")}>
                <Text> Click Touchable Element </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => props.navigation.goBack()}>
                <Text style={styles.flood}> Go Back </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20
  },

  touchBtn: {
    backgroundColor: '#ff9292',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },

  flood: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#413ad2',
    marginVertical: 30,
    marginHorizontal: 70,
    borderRadius: 15,
    textAlign: 'center'
  },
});

export default ButtonScreen;