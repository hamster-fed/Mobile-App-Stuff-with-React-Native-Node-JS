import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import StudentDetails from './StudentDetails';

const StudentsScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Students </Text>

            <TouchableOpacity
                onPress={() => props.navigation.goBack()}>
                <Text style={styles.flood}> Go Back </Text>
            </TouchableOpacity>

            <StudentDetails 
                name="Andrra" 
                description="Frontend Developer - React Native"
                image={require("../MyWork/student1.jpg")}> 
            </StudentDetails>
            <StudentDetails 
                name="Erina" 
                description="Frontend Developer - JavaScript"
                image={require("../MyWork/student2.jpg")}> 
            </StudentDetails>
            <StudentDetails 
                name="Amar" 
                description="Backend Developer - PHP & MySQL"
                image={require("../MyWork/student3.jpg")}> 
            </StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        backgroundColour: "#57f123",
    },
    title: {
        padding: 10,
        fontSize: 32,
        fontWeight: "bold",
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
})

export default StudentsScreen;