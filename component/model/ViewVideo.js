import React,{useState} from "react";
import {View,Image,TouchableOpacity,Dimensions, Modal,StyleSheet,Text} from "react-native";
import { WebView } from 'react-native-webview';
import { Entypo,Ionicons,EvilIcons,Feather} from '@expo/vector-icons';
import stylemovie from '../../style/movieStyle';
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
           <View style={stylemovie.body}>
            <View style={stylemovie.conbodycart}>
                 {products.map((item,index) =>{
                   return(
                    <TouchableOpacity key={index} activeOpacity={0.9} onPress={()=> handleGetData(item)}>
                     <View style={stylemovie.bodycart}>
                      <Image  style={stylemovie.imgCart} source={{uri: item.image}}/>
                       <View style={stylemovie.conTitle}>
                        <View style={stylemovie.renting}>
                         <Entypo name="star" size={20} color="orange" />
                         <Entypo name="star" size={20} color="orange" />
                         <Entypo name="star" size={20} color="orange" />
                         <Entypo name="star" size={20} color="orange" />
                         <Entypo name="star-outlined" size={20} color="#FFFF" />
                        </View>
                        <View>
                         <Text style={stylemovie.titleCart}>{item.title}</Text>
                       </View>
                      </View>
                     </View>
                   </TouchableOpacity>
                   )
                 })}
               </View>
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
        justifyContent: 'center',
        width: Width,
        height: Heigth,
      },
      video: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: Width,
        height: Heigth,
      },
      conTitle: {
         width: Width,      
      },
  
})