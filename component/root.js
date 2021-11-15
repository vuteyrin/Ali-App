import React from 'react'
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import styles from '../style/style'
import Header from './Header';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const Root = ({children}) => {
 return (
  <View style={styles.container}>
  <Header/>
  {/* <StatusBar  /> */}
  <ScrollView>
    <View>
     {children}
    </View>
  </ScrollView>
  </View>
 )
}

export default Root
