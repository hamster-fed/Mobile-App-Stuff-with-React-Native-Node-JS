import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const StudentDetails = (name, description, image) => {
    return(
        <View style={styles.card}>
            <image source={image} style={styles.image}> </image>
            <Text style={styles.info}> Name: {name} </Text>
            <Text style={styles.info}> Position: {description} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    info: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#85cb55',
        textAlign: 'center'
    },
});

export default StudentDetails;