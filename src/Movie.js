import React,{useState}   from "react";
import { View, Text,Image, ScrollView } from 'react-native'
import Root from '../component/root'
import stylemovie from '../style/movieStyle';
import {db} from "../api/firebase"
const Movie = () => {
    const [products,setProducts] = useState([]);
    const getProducts = async() => {
        const pro = await db.collection('user').onSnapshot
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
        console.log(products)
    return (
        <Root>
            <View style={stylemovie.movie}>
             <View style={stylemovie.conSlide}>
             <ScrollView style={stylemovie.cartSlide} showsHorizontalScrollIndicator={true}>
              <View style={stylemovie.cartSlide}>
               <Image  style={stylemovie.img} source={{uri: 'https://image.freepik.com/free-vector/movi-time_44392-97.jpg',}}/>
              </View>
              </ScrollView>
             </View>
            </View>
        </Root>
    )
}
export default Movie
