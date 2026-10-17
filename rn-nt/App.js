// import { StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import MainScreen from './MAIN/MainScreen';
// import ExerciseScreen from './MAIN/ExerciseScreen';
// import ListScreen from './MAIN/ListScreen';
// import { NavigationContainer } from '@react-navigation/native';

// import MainScreen from './MyWork/mainScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Work'>
//         <Stack.Screen
//           name="Work"
//           component={MainScreen}
//         ></Stack.Screen>
//         {/* <Stack.Screen
//           name="Home"
//           component={MainScreen}
//         ></Stack.Screen> */}
//         <Stack.Screen
//           name="Exercise"
//           component={ExerciseScreen}
//         ></Stack.Screen>
//         <Stack.Screen
//           name="List"
//           component={ListScreen}
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './MAIN/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './MAIN/ListScreen';
import MenuScreen from './MAIN/MenuScreen';
import ButtonScreen from './MAIN/ButtonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen
          name='Menu'
          component={MenuScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='Home'
          component={MainScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='List'
          component={ListScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='Button'
          component={ButtonScreen}
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

