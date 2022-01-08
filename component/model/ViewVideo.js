import React,{useState,useRef} from "react";
import {View,Image,StatusBar,Dimensions, Modal,StyleSheet,Text, BackHandler} from "react-native";
import { WebView } from 'react-native-webview';
import {db} from "../../api/firebase";
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import * as ScreenOrientation from 'expo-screen-orientation';
export default function VeiwVideo({data,viewVideo,setViewVideo}) {
   const handleClose = () =>{
      ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      setViewVideo(!viewVideo)
   }
   React.useEffect(()=>{
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  
    },[])
  return (
      <Modal visible={viewVideo}>
        <ScrollView>
          <View style={playStyle.header}>
            <StatusBar barStyle="dark" />
            {/* <AntDesign name="dingding" size={24} /> */}
            <Ionicons name="arrow-back-outline" size={24} color="#FFFF" onPress={()=> handleClose()} />
            <Ionicons name="md-menu" size={24} color="#FFFF" />
          </View>
         <WebView style={playStyle.container} source={{ uri:data?.url}}/>
        </ScrollView>
      </Modal>
      
  );
}
const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
const playStyle= StyleSheet.create({
    container: {
        flex: 1,
        height: Width+35,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black"
      },
})