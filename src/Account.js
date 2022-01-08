import React from 'react'
import Root from "../component/root"
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import style from '../style/style';
import Header from '../component/Header';
import * as ScreenOrientation from 'expo-screen-orientation';
const Account = () => {
  React.useEffect(()=>{
    ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  },[])
    return (
    <Root>
     <View style={styles.container}>
       <Header/>
      <LinearGradient colors={['rgba(0.9,0.2)', 'transparent']}>
        <View style={styles.conImage}>
          <View>
            <View style={styles.ImageContain}>
              <Image
              style={styles.image}
              source={require("../assets/vutey.jpg")}
              />
            </View>
            <View style={styles.conTitle}> 
              <Text style={styles.title}>Vutey Rin</Text>
              <Text style={styles.subTitle}>Co-fatory-vutey</Text>
            </View>
            <View style={styles.conIcon}>
              <View style={styles.icon}>
               <Ionicons name="md-chatbox-sharp" size={28} color="#00CC66" />
              </View>
              <View style={styles.icon}>
              <FontAwesome5 name="phone-square-alt" size={24} color="#FF99CC" />
             </View>
             <View style={styles.icon}>
              <FontAwesome5 name="user-check" size={24} color="#6666FF" />
             </View>
            </View>
            <View style={styles.conTitle}> 
              <Text style={styles.title}>097 983 3522</Text>
              <Text style={styles.subTitle}>Co-fatory-Tel</Text>
            </View>
            <View style={styles.conTitle}> 
              <Text style={styles.title}>rinvutey7@gmail.com</Text>
              <Text style={styles.subTitle}>Co-fatory-Email</Text>
            </View>
            <View style={styles.conTitle}> 
              <Text style={styles.title}>Location: Siem reap</Text>
              <Text style={styles.subTitle}>Co-fatory-Locations</Text>
            </View>
            <View style={styles.conTitle}> 
              <Text style={styles.title}>ABA Bank: 000591766</Text>
              <Text style={styles.subTitle}>name: Rin Vatey</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
     </View>
    </Root>
    )
}
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'black',

    },
  
    conTitle: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      padding: 2,
      color: "#FFFF"
    },
    subTitle: {
      color: "#FFFF"
    },
    conImage: {
      backgroundColor: "black",
      height: Height,
      
    },
    ImageContain: {
      width: Width,
      height: Height/2-150,
    },
    image: {
      width: Width,
      height: Height,
      resizeMode: 'contain',
      opacity: 0.4
    },
    conIcon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: Width,
    },
    icon: {
      width: 60,
      height: 50,
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    }
    

  });
export default Account
