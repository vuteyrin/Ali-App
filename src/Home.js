
import 'react-native-gesture-handler'
import { Text, View,ScrollView, StyleSheet, Image,Linking ,Dimensions,TextInput} from 'react-native';
import React,{useState} from 'react';
import { MaterialIcons,AntDesign,FontAwesome,Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import stylehome from '../style/homeStyle'
import Root from '../component/root';
import Header from '../component/Header';
// import * as actions from '../Redux/Actions/cartActions'
// import { connect } from 'react-redux';
import {db} from "../api/firebase";
import * as ScreenOrientation from 'expo-screen-orientation';
const Home = ()=> {
 const [aboutgym,setAboutgym] = useState("");
 const [openEdit,setOpenEdit] = useState(false)
 const [viewVideo,setViewVideo] = useState(false)
 const [videoData,setVideoData] = useState()
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
  const handleGetData = (item) =>{
    setVideoData(item),
    setViewVideo(!viewVideo)
  }
  React.useEffect(()=>{
    getProducts();
  },[])

console.log(products)
  return (
    <Root>
      <Header/>
    <View style={stylehome.home}>
    {/* start nav  */}
      <View style={stylehome.nav}>
        <View style={stylehome.main}>
          <View style={stylehome.containImage}>
            <Image style={stylehome.img} source={{uri: 'https://image.freepik.com/free-vector/movi-time_44392-97.jpg',}}/>
          </View>
          <View style={stylehome.edit}>
            <MaterialIcons name="mode-edit" size={20} color="#FFFF" />
          </View>
        </View>
        <View style={stylehome.ImageEdit}>
          <View style={stylehome.conEditImag}>
             <View>
                <Image style={stylehome.cartEdit} source={{uri: products[2]?.image}}/>
              </View>
            </View>
            <View style={stylehome.conEnergy}>
              <View style={stylehome.Energy}>
                <Text style={stylehome.EnergyText}>{products[2]?.title}</Text>
                <Text style={stylehome.EnergysmallText}>moive</Text>
              </View>
              <View style={ stylehome.conPost}>
                <View style={stylehome.conTextPos}>
                  <Text style={{color: "#FFFF"}}>Posts</Text>
                  <Text style={{color: "#FFFF"}}>450</Text>
                </View>
                <View style={{borderLeftWidth:1,height:30,borderColor: "#cccc",marginTop:8}}></View>
                <View style={stylehome.conTextPos}>
                  <Text style={{color: "#FFFF"}}>Fans</Text>
                  <Text style={{color: "#FFFF"}}>450</Text>
                </View>
              </View>
           </View>
        </View>
      </View>
      {/* end nav  */}
      {/* start buttom setting and inbox  */}
      <View style={stylehome.conSetting}>
        <TouchableWithoutFeedback>
          <View style={stylehome.settingBtn}>
            <Text style={{color: "#FFFF"}}>Setting</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={stylehome.settingBtn}>
            <Text style={{color: "#FFFF"}}>Inbox</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* end buttom setting and inbox  */}
      {/* start navbar */}
      <View style={stylehome.Connavbar}>
        <View style={stylehome.navbar}>
          <View style={stylehome.about}>
            <Text style={stylehome.aboutTexts}>About</Text>
          </View>
          <View style={stylehome.about}>
            <Text style={stylehome.aboutText}>Post</Text>
          </View>
          <View style={stylehome.about}>
            <Text style={stylehome.aboutText}>Gallery</Text>
          </View>
          <View style={stylehome.about}>
            <Text style={stylehome.aboutText}>Board</Text>
          </View>
          <View style={stylehome.about}>
            <Text style={stylehome.aboutText}>Trainers</Text>
          </View>
        </View>
      </View>
      {/* end navbar  */}
      {/* ABOUT GYM  */}
      <View style={stylehome.aboutGym}>
        <View style={stylehome.conAboutGym}>
          <View style={stylehome.titleAboutGym}>
            <View><Text style={{color:"#FFFF",fontSize:18,fontWeight:"bold"}}>ABOUT MY APP</Text></View>
            <View>
              <Text style={stylehome.conTextAboutGym}>
                I make this app is learnning.This app is make from React Native.
                Just view video.
              </Text>
            </View>
          </View>
          <View style={stylehome.AboutGymedit}>
            <TouchableWithoutFeedback onPress={() => setOpenEdit(!openEdit)}>
              <View style={stylehome.btnAboutEdit}>
                <MaterialIcons name="mode-edit" size={20} color="#FFFF" />
              </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
              <View style={stylehome.btnAboutEdit}>
                <AntDesign name="arrowdown" size={20} color="#FFFF" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      {/* end about Gym  */}
      {/* start contact  */}
      <View style={stylehome.conContact}>
        <View style={stylehome.subContact}>
          <View style={stylehome.iconContact}>
            <View style={stylehome.icons}>
              <FontAwesome name="phone" size={24} color="black" onPress={()=> Linking.openURL("https://web.facebook.com/?_rdc=1&_rdr")} />
            </View>
            <View>
              <Text style={{color:"#FFFF",fontSize: 16}}>+855-979833522</Text>
            </View>
          </View>
          <View style={stylehome.iconContact}>
            <View style={stylehome.icons}>
              <Ionicons name="earth" size={24} color="black"  onPress={()=> Linking.openURL("https://web.facebook.com/?_rdc=1&_rdr")} />
            </View>
            <View>
              <Text style={{color:"#FFFF",fontSize: 16}}>rinvutey.com</Text>
            </View>
          </View>
          <View style={stylehome.iconContact}>
            <View style={stylehome.icons}>
              <Ionicons name="ios-location-sharp" size={24} color="black"  onPress={()=> Linking.openURL("https://www.google.com/maps")} />
            </View>
            <View>
              <Text style={{color: "#FFFF",fontSize: 16}}>Cambodian Siem Reap</Text>
            </View>
          </View>
        </View>
      </View>
      {/* end contact   */}
      {/* post  */}
      <View style={stylehome.ConPost}>
        <View style={stylehome.subPost}>
          <View style={stylehome.postTitle}>
            <Text style={{color:"#FFFF",fontSize: 18,fontWeight:"bold"}}>Posts</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={true} >
          <View style={stylehome.conSlider}>
            {products && products?.map((item, ind)=>{
              return(
              <TouchableOpacity>
               <View key={ind}>
                <Image style={stylehome.imageSilder} source={{uri: item.image}}/>
               </View>
              </TouchableOpacity>
              )
            })}

          </View>
          </ScrollView>
          <View style={stylehome.nextSlider}>
              <View style={stylehome.btnMoveSlide}>
                <AntDesign name="arrowright" size={20} color="#FFFF" />
              </View>
          </View>
        </View>
      </View>
      {/* end post */}
      {/* start Gallary */}
      <View style={stylehome.containGallery}>
        <View style={stylehome.subGallery}>
            <View style={stylehome.containTextGallery}>
              <Text style={stylehome.textGallery}>GALLERY</Text>
            </View>
            <View style={stylehome.GalleryRow}>
              <View style={stylehome.GalleryColOne}>
                <View style={stylehome.GalleryColin}>
                  <Image style={stylehome.imageGallery} source={{uri: products[3]?.image}}/>
                </View>
                <View  style={stylehome.GalleryColout}>
                 <Image style={stylehome.imageGallery} source={{uri: products[2]?.image}}/>
                </View>
              </View>
              <View style={stylehome.GalleryColTow}>
               <Image style={stylehome.imageGallery} source={{uri: products[0]?.image}}/>
            </View>
          </View>
        </View>
        <View style={stylehome.nextSlider}>
          <View style={stylehome.btnMoveSlide}>
            <AntDesign name="arrowright" size={20} color="#FFFF" />
          </View>
        </View>
      </View>
      {/* end Gallary  */}
      {/* start board  */}
      <View style={stylehome.containBoard}>
        <View style={stylehome.subContainBoard}>
          <View style={stylehome.conBoard}>
            <View style={stylehome.navboard}>
              <View style={stylehome.board}>
                <Text style={stylehome.boardText}>APP</Text>
              </View>
              <View style={stylehome.opening}>
                <Text style={stylehome.openingText}>GOALD</Text>
              </View>
            </View>
            <View style={stylehome.introducing}>
              <View style={stylehome.subintroducing}>
                <Text style={stylehome.introducingText}> - JUST FOR FUN </Text>
                <Text style={stylehome.introducingText}> - REARN REACT NATIVE</Text>
                <Text style={stylehome.introducingText}> - WATCH SOME MOVIE</Text>
                <Text style={stylehome.introducingText}> - KNOWLEGE</Text>
              </View>
              <View style={stylehome.containEdite}>
                 <TouchableWithoutFeedback onPress={() => setOpenEdit(!openEdit)}>
                    <View style={stylehome.btnAboutEdit}>
                      <MaterialIcons name="mode-edit" size={20} color="#FFFF" />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={stylehome.btnAboutEdit}>
                      <AntDesign name="arrowdown" size={20} color="#FFFF" />
                    </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* end board  */}
      {/* gym trainers  */}
      <View style={stylehome.containGymTrainers}>
        <View style={stylehome.subConGymTrainers}>
          <View style={stylehome.conTextGymTrainers}>
            <Text style={stylehome.textGymTrainers}>MOVIE JUM</Text>
          </View>
          <View style={stylehome.conSlider}>
         
           {products&& products?.map((item,ind) =>{
             return(
              <TouchableOpacity>
                <View key={ind}>
                  <Image style={stylehome.imageSilderGymTrain} 
                  source={{uri: item?.image }}/>
                  <Text style={{color: "#FFFF",paddingVertical: 10}}>Michel l</Text>
                </View>
              </TouchableOpacity>
             )
           })}
     
          </View>
          <View style={stylehome.conGymTrainNextBack}>
            <View style={stylehome.btnNextBack}>
              <View style={stylehome.btnBack}><Ionicons name="arrow-back-outline" size={20} color="#FFFF" /></View>
              <View style={stylehome.btnBack}><Ionicons name="arrow-forward-outline" size={20} color="#FFFF" /></View>
            </View>
          </View>
        </View>
      </View>
      {/* end gym tainers  */}
    </View>
    </Root>

  );
 }

 export default Home
