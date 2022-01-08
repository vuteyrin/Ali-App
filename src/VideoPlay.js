import React,{useState}  from 'react'
import { View, TouchableOpacity, Image,Text,StyleSheet } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import playStyle from '../style/playStyle';
import stylemovie from '../style/movieStyle';
import Root from '../component/root';
import { Entypo,FontAwesome } from '@expo/vector-icons';
import {db} from "../api/firebase";
import { WebView } from 'react-native-webview';
import  VeiwVideo from "../component/model/ViewVideo"
import Header from '../component/Header';
const VideoPlay = ({navigation,route}) => {
    // const {data} = route?.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [products,setProducts] = useState([]);
    const [dataPlay,setDataPlay] = useState(route?.params);
    const [viewVideo,setViewVideo] = useState(false);
    const [videoData,setVideoData] = useState()
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
        const handleGetData = (item) =>{
          setVideoData(item),
          setViewVideo(!viewVideo)
        }
        React.useEffect(()=>{
          getProducts();

        },[])

    if(products.length === 0){
    return(
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )  
    }else{
    return (
      <Root>
      <Header />
      {viewVideo&& <VeiwVideo viewVideo={viewVideo} setViewVideo={setViewVideo} data={videoData}/>}  
       <View style={playStyle.container}>
        {/* <Video
            ref={video}
            style={playStyle.video}
            source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
         /> */}
          {/* <WebView 
            style={playStyle.video}
            source={{ uri:dataPlay?.data?.url}}
          /> */}
         <View style={playStyle.conTitle}>
          <View style={playStyle.title}>
           <Text style={playStyle.titleText}>Big Jungle Ducks</Text>
            <Text style={playStyle.subTitle}> 2019 PG 16 Epicedce</Text>
             </View>
             <View style={playStyle.renting}>
              <Entypo name="star" size={20} color="orange" />
              <Entypo name="star" size={20} color="orange" />
              <Entypo name="star" size={20} color="orange" />
              <Entypo name="star" size={20} color="orange" />
              <Entypo name="star-outlined" size={20} color="#FFFF" />
            </View>
            {/* <TouchableOpacity onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
             <View style={playStyle.btnPlay}>
              <Text style={playStyle.btnPlayText}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
             </View>
            </TouchableOpacity> */}
         </View>
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  }
})


export default VideoPlay
