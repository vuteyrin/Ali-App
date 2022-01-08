import React, { Component } from 'react'
import { StatusBar, View,StyleSheet,Dimensions } from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import style from '../style/style';
 const HeaderModel = ({setViewVideo,viewVideo})=> {

  return (
   <View style={styles.header}>
    <StatusBar barStyle="dark" />
    {/* <AntDesign name="dingding" size={24} /> */}
    <Ionicons name="arrow-back-outline" size={24} color="#FFFF" onPress={()=> setViewVideo(!viewVideo)} />
    <Ionicons name="md-menu" size={24} color="#FFFF" />
   </View>
  )
 }

const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
 header: {
//   width: Heigth,
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 5,
  backgroundColor: "black"
 },
 
});
export default HeaderModel