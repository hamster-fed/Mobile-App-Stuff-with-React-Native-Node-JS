import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image} from 'react-native';

const StudentInfo = ({fullname, description, profileImage}) => {
    return(
        <View style={styles.card}>
            <Text style={styles.info}> Name: {fullname} </Text>
            <Text style={styles.info}> Position: {description} </Text>
            <Image source={profileImage} style={styles.profile}/>
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
        backgroundColor: '#156296',
        textAlign: 'center',
        padding: 10,
        margin: 0,
    },

    profile: {
        width: 350,
        height: 450,
        padding: 20
    },
});

export default StudentInfo;