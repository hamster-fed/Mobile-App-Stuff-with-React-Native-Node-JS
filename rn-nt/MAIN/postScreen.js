// https://jsonplaceholder.typicode.com/posts

import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class PostScreen extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({posts: jsonData})
    }
  render() {
    const {posts} = this.state
    return (
      <View>
        <Text> Posts </Text>
        <FlatList
            keyExtractor={posts => posts.id}
            data={posts}
            renderItem={({item}) => (
                <View>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
        ></FlatList>
      </View>
    )
  }

  
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        fontSize: 36, 
        textAlign: 'center',
        paddingVertical: 10
    },
    card: {
        backgroundColor: 'pink',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10
    },
    postId: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        padding: 5,
        textAlign: 'center',
        marginVertical: 5
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
  })