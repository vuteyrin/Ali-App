import React,{useRef} from 'react'
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import styles from '../style/style'
import Header from './Header';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const Root = ({children,scrollRef}) => {


 return (
  <SafeAreaView style={styles.container}>
  {/* <Header/> */}
  <ScrollView ref={scrollRef}>
    <View>
     {children}
    </View>
  </ScrollView>
  </SafeAreaView>
 )
}

export default Root

