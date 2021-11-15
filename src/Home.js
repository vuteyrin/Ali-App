
import 'react-native-gesture-handler'
import { Text, View, StyleSheet, Image,Linking ,Dimensions,TextInput} from 'react-native';
import React,{useState} from 'react';
import { MaterialIcons,AntDesign,FontAwesome,Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import stylehome from '../style/homeStyle'
const Home = ()=> {
 const [aboutgym,setAboutgym] = useState("We can also detect whenever the value new character inside this field, we then take the current value that is inside the field and update our state.");
 const [openEdit,setOpenEdit] = useState(false)

  return (
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
                <Image style={stylehome.cartEdit} source={{uri: 'https://images.yaoota.com/BfoseD4p9GAFkiQZin5pf0Q2SPQ=/trim/yaootaweb-production-ke/media/crawledproductimages/75e682d82e48b116f918fa1c44b8c791ba22a93a.jpg'}}/>
              </View>
              <View style={stylehome.cartIcon}>
                <MaterialIcons name="mode-edit" size={20} color="#FFFF" />
              </View>
            </View>
            <View style={stylehome.conEnergy}>
              <View style={stylehome.Energy}>
                <Text style={stylehome.EnergyText}>Energy Gym</Text>
                <Text style={stylehome.EnergysmallText}>Gym</Text>
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
            <View><Text style={{color:"#FFFF",fontSize:18,fontWeight:"bold"}}>ABOUT GTY</Text></View>
            <View>
              {openEdit? 
               <TextInput 
               autoFocus
               type="text" 
               style={stylehome.EditTextInput} 
               value={aboutgym} 
               onChangeText={(e)=>setAboutgym(e)}
               numberOfLines={10}
               multiline={true} />
              :<Text style={stylehome.conTextAboutGym}>{aboutgym}</Text> }
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
              <Text style={{color:"#FFFF",fontSize: 16}}>Ninijafits.com</Text>
            </View>
          </View>
          <View style={stylehome.iconContact}>
            <View style={stylehome.icons}>
              <Ionicons name="ios-location-sharp" size={24} color="black"  onPress={()=> Linking.openURL("https://www.google.com/maps")} />
            </View>
            <View>
              <Text style={{color: "#FFFF",fontSize: 16}}>Tokyo.Japen</Text>
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
          <View style={stylehome.conSlider}>
            <View>
              <Image style={stylehome.imageSilder} source={{uri: 'https://media.istockphoto.com/photos/fitness-sport-training-gym-success-and-lifestyle-concept-group-of-picture-id1282884610?b=1&k=20&m=1282884610&s=170667a&w=0&h=WcpwYC59VH5yeK7N5av_nRUXtNKKKapuoCQdxt9thHA='}}/>
            </View>
            <View>
              <Image style={stylehome.imageSilder} source={{uri: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}/>
            </View>
            <View>
              <Image style={stylehome.imageSilder} source={{uri: 'https://media.istockphoto.com/photos/you-are-strong-strong-is-you-picture-id1288737452?b=1&k=20&m=1288737452&s=170667a&w=0&h=NIGqhjD9Nlp92PM3ORBr6wft1o-1h33ti7OaXmFan84='}}/>
            </View>
          </View>
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
                  <Image style={stylehome.imageGallery} source={{uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}}/>
                </View>
                <View  style={stylehome.GalleryColout}>
                 <Image style={stylehome.imageGallery} source={{uri: 'https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?size=626&ext=jpg'}}/>
                </View>
              </View>
              <View style={stylehome.GalleryColTow}>
               <Image style={stylehome.imageGallery} source={{uri: 'https://m.media-amazon.com/images/I/71Zt7no5nyS._AC_SL1500_.jpg'}}/>
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
                <Text style={stylehome.boardText}>BOARD</Text>
              </View>
              <View style={stylehome.opening}>
                <Text style={stylehome.openingText}>OPENING HOURS</Text>
              </View>
            </View>
            <View style={stylehome.introducing}>
              <View style={stylehome.subintroducing}>
                <Text style={stylehome.introducingText}> - Intruducing new member 1 </Text>
                <Text style={stylehome.introducingText}> - new year close date</Text>
                <Text style={stylehome.introducingText}> - new year close date</Text>
                <Text style={stylehome.introducingText}> - new year close date</Text>
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
            <Text style={stylehome.textGymTrainers}>GYM TRAINERS</Text>
          </View>
          <View style={stylehome.conSlider}>
            <View>
              <Image style={stylehome.imageSilderGymTrain} 
              source={{uri: 'https://www.ucd.ie/sportandfitness/t4media/Banner-Gym-Floor.jpg'}}/>
              <Text style={{color: "#FFFF",paddingVertical: 10}}>Max Leto</Text>
            </View>
            <View>
              <Image style={stylehome.imageSilderGymTrain} 
              source={{uri: 'https://us.123rf.com/450wm/wertinio/wertinio2004/wertinio200400161/146918520-brutal-athletic-girl-pumping-up-muscules-with-dumbbells-and-showing-her-trained-body-.jpg?ver=6'}}/>
              <Text style={{color: "#FFFF",paddingVertical: 10}}>Ellen Watts</Text>
            </View>
            <View>
              <Image style={stylehome.imageSilderGymTrain} 
              source={{uri: 'https://www.fitness19.com/wp-content/uploads/2014/05/photodune-7566509-personal-trainer-helping-woman-at-gym-xs-548x330.jpg'}}/>
              <Text style={{color: "#FFFF",paddingVertical: 10}}>Michel l</Text>
            </View>
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
  );
 }
 export default Home
