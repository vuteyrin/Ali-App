import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions } from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import style from '../style/style';
 const Header= (navigation)=> {

  return (
   <View style={styles.header}>
    {/* <Ionicons name="arrow-back" size={24} color="#FFFF" onPress={()=> navigation.goBack()} /> */}
    <AntDesign name="dingding" size={24} color="#FFFF" />
    <Ionicons name="md-menu" size={24} color="#FFFF" />
   </View>
  )
 }

const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
 header: {
  width: Width,
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 5,
  // backgroundColor: "red"
 },
 
});
export default Header
