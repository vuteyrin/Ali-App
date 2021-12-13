import React,{useState} from "react";
import {View,Image,TouchableOpacity,Dimensions, Modal,StyleSheet,Text} from "react-native";
import { WebView } from 'react-native-webview';
import { Entypo,Ionicons,EvilIcons,Feather} from '@expo/vector-icons';

import {db} from "../../api/firebase";
import Root from "../root";
import style from "../../style/style";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
export default function VeiwVideo({data,viewVideo,setViewVideo}) {
    const [products,setProducts] = useState([]);
    const [status, setStatus] = React.useState({});
    const [dataPlay,setDataPlay] = useState(data)
    const getProducts = async() => {
        const pro = await db.collection('movies_list').onSnapshot
       (querySnapshot => {
          const item = [];
          const id = []
          querySnapshot.forEach(doc => {
            item.push({...doc.data(), id: doc.id})
          });
          setProducts(item)
        });
        }
        const handeChangeMovie=(item)=>{
            setDataPlay(item);
            navigation.navigate("Search")
        }
        React.useEffect(()=>{
          getProducts();
        },[])
  return (
      <Modal visible={viewVideo}>
        <Root>
         <View style={playStyle.container}>
          <WebView style={playStyle.video} source={{ uri:dataPlay?.url}}/>
            <View style={playStyle.conTitle}>
             <TouchableOpacity onPress={() => setViewVideo(!viewVideo)}>
              <View style={playStyle.btnPlay}>
               <Text style={playStyle.btnPlayText}>back</Text>
              </View>
             </TouchableOpacity>
           </View>
         </View>
       </Root>
      </Modal>
      
  );
}

const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
const playStyle= StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        width: Width,
        height: Heigth,
        backgroundColor:'red'
      },
      video: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: Heigth,
        height: Width,
        transform: [
          { rotateY: "0deg" },
          { rotateZ: "90deg" }
        ],
        flex: 1,
        // marginRight: 330,
        // marginTop: 10,
      },
 
      conTitle: {
        //  backgroundColor: "red",
         width: Width,
                 
      },
  
      btnPlay: {
        width: 100,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          marginVertical: 10,
          borderRadius: 5,
          transform: [
            { rotateY: "0deg" },
            { rotateZ: "90deg" }
          ],
      },
      btnPlayText: {
          color: "#FFFF"
      }
})