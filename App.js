
import React from 'react'
import { View, Text } from 'react-native'
import Root from './component/root'
import TabHome from './navigation/Tab'
import { NavigationContainer } from '@react-navigation/native';



const App = ({child}) => {
  // Redux
  return (
      <NavigationContainer>
        <TabHome/>
      </NavigationContainer>

  )
}

export default App
