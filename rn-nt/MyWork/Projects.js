import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image} from 'react-native';

const Projects = ({image}) => {
    return(
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
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

    image: {
        width: 350,
        height: 450,
        padding: 20,
    },
});

export default Projects;