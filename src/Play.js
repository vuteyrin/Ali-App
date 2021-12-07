import React,{useState}  from 'react'
import { View, TouchableOpacity, Image,Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import playStyle from '../style/playStyle';
import stylemovie from '../style/movieStyle';
import Root from '../component/root';
import { Entypo,FontAwesome } from '@expo/vector-icons';
import {db} from "../api/firebase"
const Play = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [products,setProducts] = useState([]);
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
    
        React.useEffect(()=>{
          getProducts()
        },[])
    return (
      <Root>
       <View style={playStyle.container}>
        <Video
            ref={video}
            style={playStyle.video}
            source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
         />
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
            <TouchableOpacity onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
             <View style={playStyle.btnPlay}>
              <Text style={playStyle.btnPlayText}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
             </View>
            </TouchableOpacity>
         </View>
         <View style={stylemovie.body}>
            <View style={stylemovie.conbodycart}>
                 {products.map((item,index) =>{
                   return(
                    <TouchableOpacity key={index} activeOpacity={0.9} underlayColor="#FFFF">
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

export default Play
