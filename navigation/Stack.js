import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../src/Home';
import Movie from '../src/Movie';
import VideoPlay from '../src/VideoPlay';
import Account from '../src/Account';
const Stack = createStackNavigator();
const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="VideoPlay" component={VideoPlay} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}
const StackPlayVideo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VideoPlay" component={VideoPlay} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
const StackMovie = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Movie" component={Movie} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  };
const StackAccount = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Movie" component={Account} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  };
  
export {StackHome,StackMovie,StackPlayVideo,StackAccount}