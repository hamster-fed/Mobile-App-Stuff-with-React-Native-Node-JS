import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';


export default function MainScreen() {
    const name = 'Andrra';
    const surname = 'Rexhepi';
    const city = 'Tetovo';
    const age = 17;
    const birthday = '30 July 2009';
    const hobbies = ['Listening to Music, ', 'Writing, ', 'Collecting and refurbishing scrap, ','Playing games'];
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.title}> Andrras Profile </Text>
            </View>
            
            <View style={styles.header}>
                <Text style={styles.subtitle}> Info </Text>
            </View>

            <View style={styles.card}>
                <Text> Emri: <Text style={styles.andrra}> {name} </Text> </Text>
                <Text> Mbiemri: {surname} </Text>
                <Text> Qyteti ku jetoj: {city} </Text>
                <Text> Mosha: {age} </Text>
                <Text> Datelindja: {birthday} </Text>
                <Text> Hobit: {hobbies} </Text>
            </View>

            <Text style={styles.footer}> My own Profile App shown in Expo </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4eefc',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    header: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        paddingLeft: 80,
        paddingRight: 80,
        alignItems: 'center',
        elevation: 4,
        margin: 10,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#23485A',
        paddingTop: 10,
        paddingBottom: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#456B7A',
        fontStyle: 'italic',
        paddingLeft: 85,
        paddingRight: 85,
    },

    card: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        marginTop: 50,
        padding: 25,
        borderRadius: 15,
        elevation: 5,
        color: '#155677',
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#c4eefc',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    avatarText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#23485A',
    },

    fullName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#23485A',
    },

    location: {
        fontSize: 16,
        textAlign: 'center',
        color: '#66818D',
        marginTop: 5,
    },

    divider: {
        height: 1,
        backgroundColor: '#c4eefc',
        marginVertical: 20,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#367A96',
        marginBottom: 15,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#456B7A',
    },
    hobbyItem: {
        backgroundColor: '#EAF9FE',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    hobbyText: {
        fontSize: 16,
        color: '#23485A',
    },

    footer: {
        textAlign: 'center',
        color: '#66818D',
        marginBottom: 25,
        fontSize: 13,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    andrra: {
        color: '#9b2e2e',
    }
});
