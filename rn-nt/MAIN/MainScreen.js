import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';


const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> whats up gng </Text>
      <Text style={styles.para}> lorem ipsun dolor blah blah dummy text </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  para: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#85cb55',
  },
});


export default MainScreen;