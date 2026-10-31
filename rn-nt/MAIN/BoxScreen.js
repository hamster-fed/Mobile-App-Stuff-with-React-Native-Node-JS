import React, { Component } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

const boxScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.item1}> </View>
            <View style={styles.item2}> </View>
            <View style={styles.item3}> </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: flex, //flexwrap (nuk nxihen elementet, rresht te ri, nowrap nuk ka rresht te ri)
    flexDirection: "column", //row
    backgroundColor: "#fdd1c3",
    justifyContent: "center", //start center end space-between space-around
    alignItems: "stretch", //center
  },

  item1: {
    width: 50,
    height: 50,
    backgroundColor: "#172285",
    alignSelf: "end"
  },

  item2: {
    width: 50,
    height: 50,
    backgroundColor: "#93284f",
    alignSelf: "start"
  },

  item3: {
    width: 50,
    height: 50,
    backgroundColor: "#b9af3c",
    alignSelf: "center"
  },
});

export default boxScreen;
// codementum.org
// coding olympiad 