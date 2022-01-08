import React,{useState,useRef} from 'react'
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import stylemovie from '../style/movieStyle';
import Root from "../component/root";
import { Entypo,AntDesign,Ionicons,Feather} from '@expo/vector-icons';
import Header from '../component/Header';
import {db} from "../api/firebase";
import * as ScreenOrientation from 'expo-screen-orientation';
import  VeiwVideo from "../component/model/ViewVideo";
import playStyle from '../style/playStyle';
const Favorite = ({navigation}) => {
    const [products,setProducts] = useState([]);
    const [status, setStatus] = React.useState(true);
    const [dataPlay,setDataPlay] = useState();
    const [viewVideo,setViewVideo] = useState(false)
    const [videoData,setVideoData] = useState()
    const scrollRef = useRef();
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
        const onPressTouch = () => {
          scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
          });
        }
        const handleGetData = (item) =>{
          setVideoData(item),
          setViewVideo(!viewVideo)
        }
        React.useEffect(()=>{
          getProducts();
          ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        },[])

        React.useEffect(() =>{
          setTimeout(function(){setStatus(true)}, 1000)
        },[status])



    return (
        <View style={styles.container}>
          <Root scrollRef={scrollRef}>
            <Header/>
            {viewVideo&& <VeiwVideo navigation={navigation} viewVideo={viewVideo} setViewVideo={setViewVideo} data={videoData}/>} 
            <View style={playStyle.conTitle}>
          <View style={playStyle.title}>
           <Text style={playStyle.titleText}>Big Jungle Ducks</Text>
            <Text style={playStyle.subTitle}> 2019 PG 16 Epicedce</Text>
             </View>
             <View style={playStyle.renting}>
              <AntDesign name="heart" size={20} color="orange" />
              <AntDesign name="heart" size={20} color="orange" />
              <AntDesign name="heart" size={20} color="orange" />
              <AntDesign name="heart" size={20} color="orange" />
              <Ionicons name="heart-half" size={20} color="orange" />


              </View>
             </View> 
             <View style={stylemovie.body}>
              <View style={stylemovie.conbodycart}>
                 {products?.map((item,index) =>{
                   return(
                    <TouchableOpacity key={index} activeOpacity={0.9} onPress={()=> handleGetData(item)}>
                     <View style={stylemovie.bodycart}>
                      <Image  style={stylemovie.imgCart} source={{uri: item.image}}/>
                       <View style={stylemovie.conTitle}>
                        <View style={stylemovie.renting}>
                         <AntDesign name="heart" size={20} color="orange" />
                         <AntDesign name="heart" size={20} color="orange" />
                         <AntDesign name="heart" size={20} color="orange" />
                         <AntDesign name="heart" size={20} color="orange" />
                         <Ionicons name="heart-half" size={20} color="orange" />
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
            </Root>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        
    }
})


export default Favorite
