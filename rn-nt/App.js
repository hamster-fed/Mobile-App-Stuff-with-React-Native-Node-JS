import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './MAIN/MainScreen';
import ExerciseScreen from './MAIN/ExerciseScreen';
import ListScreen from './MAIN/ListScreen';
import MenuScreen from './MAIN/MenuScreen';
import ButtonScreen from './MAIN/ButtonScreen';
import StudentsScreen from './MAIN/StudentsScreen';
import BoxScreen from './MAIN/BoxScreen';
import PostScreen from './MAIN/MyPostsScreen';

import mainScreen from './MyWork/mainScreen';
import ProfileScreen from './MyWork/ProfileScreen';
import PostTheftScreen from './MyWork/PostTheftScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TheftPosts'>
        <Stack.Screen
          name='TheftPosts'
          component={PostTheftScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='Posts'
          component={PostScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Box"
          component={BoxScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Work"
          component={mainScreen}
        ></Stack.Screen>
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
        <Stack.Screen
          name='Details'
          component={StudentsScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='Students'
          component={StudentsScreen}
        ></Stack.Screen>
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

