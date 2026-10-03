import{ Text, View, StyleSheet } from 'react-native'
const ExerciseScreen = () => {
    let message = "Hello World!";

    message = "Hello from Digital School";
    return(
        <View>
            <Text style={styles.txt}>{message}</Text>
            <Text> Second Text </Text>
        </View>
    )   
}

const styles = StyleSheet.create({
       txt: {
        fontSize: 50,
        fontWeight: 'bold'
      }
    });
export default ExerciseScreen;