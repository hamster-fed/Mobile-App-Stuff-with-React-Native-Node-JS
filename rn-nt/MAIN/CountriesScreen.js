import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import data from ".../src/data/countries.json"

export default class CountriesScreen extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

  render() {
    return (
      <View>
        <Text> TextInComponent </Text>
        <FlatList
            data={this.state.countries}
            keyExtractor={countries => countries.id}
            renderItems={({item}) => (
                <View styles={style.cardwrapper}>
                    <Text> City Name: {item.name} </Text>
                    <Text> Country Name: {item.country} </Text>
                    <Text> Description: {item.description} </Text>
                </View>
            )}
        >

        </FlatList>
      </View>
    )
  }

  
}