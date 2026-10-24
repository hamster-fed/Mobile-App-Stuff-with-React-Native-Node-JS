import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import StudentInfo from './StudentInfo';
import Projects from './Projects';

const ProfileScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.title}> Student Information </Text>
            </View>

            <View style={styles.personCard}>
                <StudentInfo
                    fullname="Andrra"
                    description="Frontend Developer - React Native"
                    profileImage={require("./student1.jpg")}
                />
                <Projects image={require("./student1.jpg")} />
            </View>

            <View style={styles.personCard}>
                <StudentInfo
                    fullname="Erina"
                    description="Frontend Developer - JavaScript"
                    profileImage={require("./student2.jpg")}
                />
                <Projects image={require("./student2.jpg")} />
            </View>

            <View style={styles.personCard}>
                <StudentInfo
                    fullname="Amar"
                    description="Backend Developer - PHP & MySQL"
                    profileImage={require("./student3.jpg")}
                />
                <Projects image={require("./student3.jpg")} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cae2fa',
    },
    content: {
        paddingHorizontal: 18,
        paddingTop: 28,
        paddingBottom: 36,
    },
    header: {
        marginBottom: 22,
    },

    title: {
        color: '#025674',
        fontSize: 30,
        fontWeight: '800',
    },

    personCard: {
        marginBottom: 18,
        overflow: 'hidden',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        elevation: 3,
    },
});

export default ProfileScreen;