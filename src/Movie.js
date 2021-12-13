import React,{useState}   from "react";
import { View, Text,Image, ScrollView,TouchableOpacity,FlatList } from 'react-native'
import Root from '../component/root'
import stylemovie from '../style/movieStyle';
import {db} from "../api/firebase"
import { Entypo,FontAwesome } from '@expo/vector-icons';
import  VeiwVideo from "../component/model/ViewVideo"
const Movie = ({ navigation, route }) => {
    const [products,setProducts] = useState([]);
    const [viewVideo,setViewVideo] = useState(false)
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
          getProducts()
        },[])

    return (
        <Root>
         {viewVideo&& <VeiwVideo viewVideo={viewVideo} setViewVideo={setViewVideo} data={videoData}/>}  
            <View style={stylemovie.movie}>
             <View style={stylemovie.conSlide}>
              <View style={stylemovie.cartSlide}>
               <View style={stylemovie.cartSlide}>
                <Image  style={stylemovie.img} source={{uri: 'https://image.freepik.com/free-vector/movi-time_44392-97.jpg',}}/>
               </View>
              </View>
             </View>
             <View style={stylemovie.body}>
               <View style={stylemovie.conbodycart}>
                 {products.map((item,index) =>{
                   return(
                    <TouchableOpacity key={index} activeOpacity={0.9} 
                    underlayColor="#FFFF" onPress={() => handleGetData(item)}>
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
export default Movie
