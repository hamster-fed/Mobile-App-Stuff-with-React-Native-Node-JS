import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MAIN/MainScreen';
import ExerciseScreen from './MAIN/ExerciseScreen';
import ListScreen from './MAIN/ListScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Exercise'>
        <Stack.Screen
          name="Home"
          component={MainScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="List"
          component={ListScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
