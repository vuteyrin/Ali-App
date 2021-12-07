import React from 'react'
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import styles from '../style/style'
import Header from './Header';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const Root = ({children}) => {
 return (
  <SafeAreaView style={styles.container}>
  <Header/>
  <StatusBar style={'auto'}/>
  <ScrollView>
    <View>
     {children}
    </View>
  </ScrollView>
  </SafeAreaView>
 )
}

export default Root

