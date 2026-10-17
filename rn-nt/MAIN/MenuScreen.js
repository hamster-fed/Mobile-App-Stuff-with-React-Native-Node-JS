import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const MenuScreen = (props) => {
    return(
        <View>
            <Text style={styles.text}> Menu Screen </Text>

            <Button
            title='go to List Screen'
            onPress={() => props.navigation.navigate('List')}
            >
            </Button>

            <TouchableOpacity
            onPress={() => props.navigation.navigate('Button')}>
                <Text style={styles.flood}> Go To Button Screen </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#85cb55',
    marginVertical: 20,
    textAlign: 'center'
  },

  flood: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7cbe4f',
    marginVertical: 30,
    marginHorizontal: 70,
    borderRadius: 15,
    textAlign: 'center'
  },
});

export default MenuScreen;