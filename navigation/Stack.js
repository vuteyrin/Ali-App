import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../src/Home';
import Movie from '../src/Movie';
import Play from '../src/Play';
const Stack = createStackNavigator();
const StackHome = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Play" component={Play} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
const StackMovie = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Movie" component={Movie} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  };

export {StackHome,StackMovie}