import { Text, View, StyleSheet, Image,Linking ,Dimensions} from 'react-native';
const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default  StyleSheet.create({
  // contianer //
  home:{
    alignItems: "center",
    justifyContent: "center",
    // height: Heigth,
    // width: Width,
  },
  // nav header //
  nav: {
    height: 250,
    position: "relative",
  },
  main: {
    height: 150,
  },
  edit: {
    top:10,
    width: 40,
    height:30,
    right: 15,
    borderRadius: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  containImage: {
    width: Width,
    height: 150,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  },
  ImageEdit: {
    width: Width,
    position: "relative",
    flexDirection: "row"
  },
  conEditImag: {
    bottom: 40,
    width: 130,
    height:140,
    padding: 7,
    backgroundColor: "black",
    position: "relative",

  },
  cartEdit: {
    height:"100%",
    width: "100%",
    resizeMode:"cover"
  },
  cartIcon :{
    top:0,
    width: 40,
    height:30,
    right: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  conEnergy: {
   width: "100%",
   paddingLeft:10,
  },
  Energy:{
  },
  EnergyText:{
    fontSize: 20,
    color: "#FFFF",
  },
  EnergysmallText:{
    fontSize: 12,
    color: "#cccc"
  },
  conPost: {
    width: "60%",
    backgroundColor: "#404040",
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 5

  },
  conTextPos: {
    width: "50%",
    alignItems: "center",
    padding:5
  },
// end nav //
// setting btn //
conSetting: {
  width: Width,
  height: 70,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",

},
settingBtn: {
  width: Width/2.2,
  backgroundColor: "#404040",
  alignItems: "center",
  borderRadius: 5,
  padding: 10,
  margin: 10
},
// end setting btn //
// navbar//
Connavbar: {
  width: Width,
  height: 60,
  justifyContent: 'center',
  alignItems: "center",
  margin: 10,
},
navbar: {
  backgroundColor:"#404040",
  width: "98%",
  height: "70%",
  borderRadius: 5,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

},
about :{
  margin: 5,
},
aboutText: {
  color: "#FFFF",
},
aboutTexts:{
  backgroundColor: "black",
  color: "#FFFF",
  borderRadius:5,
  textAlign: "center",
  paddingVertical:5,
  paddingHorizontal:10
},
// end navbar //
// ABOUT GYM //
aboutGym : {
  width: Width,
  height: 140,
  padding: 5,
},
conAboutGym: {
  width: "100%",
  flexDirection: "row"
},
titleAboutGym: {
  width: "90%",
  paddingLeft:20
},
conTextAboutGym: {
  position: "relative",
  height: 100,
  color: "#FFFF",
  fontSize:16,
  paddingTop:10
},
AboutGymedit:{
  width: "10%",
  alignItems: "center",
  borderRadius: 5,
  justifyContent: "space-between",
},
btnAboutEdit:{
  backgroundColor: "#CCCC",
  padding: 2,
  width: 40,
  alignItems:"center",
  borderRadius: 5
},
EditTextInput: {
  position: "relative",
  height: 100,
  color: "#FFFF",
  fontSize:16,
  // paddingTop:10,
  borderWidth: 1,
  borderColor: "#FFFF",
  marginRight: 3,
},
//end ABOUT GYM //
// start contack //
conContact : {
  height: 180,
  width: Width,
  paddingHorizontal: 25,
  paddingVertical: 10,
},
subContact :{
  height: "100%",
  borderLeftWidth: 2,
  borderColor: "#CCCC",
  justifyContent: "space-between",
},
iconContact:{
  flexDirection: "row",
  height: 40,
  marginVertical: 2,
  alignItems: "center"
},
icons: {
  width: 40,
  height: 40,
  backgroundColor: "#CCCC",
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: 5,
  marginRight: 10,
  borderRadius: 5
},
// end contact  //
// post  //
ConPost : {
  width: Width,
  height: 250,
  padding: 10
},
subPost: {
  width: "100%",
  height: "100%",
  backgroundColor: "#404040"
},
postTitle: {
  paddingVertical:15,
  paddingHorizontal: 15,
},
// slider //
conSlider:{
  width: "100%",
  height: 120,
  flexDirection: "row"
},
imageSilder: {
  width: 95,
  height: "100%",
  borderRadius: 5,
  resizeMode: "cover",
  marginHorizontal: 9,
},
nextSlider :{
  width: "100%",
  height: 50,
  justifyContent: "flex-end",
  alignItems: "flex-end"
},
btnMoveSlide: {
  backgroundColor: "#CCCC",
  padding: 2,
  width: 40,
  alignItems:"center",
  borderRadius: 5,
  marginRight: 10
},
// end post //
// start Gallery //
containGallery : {
  width: Width,
  height: 350,
  paddingHorizontal: 8,
  paddingVertical: 10
},
subGallery: {
  width: "100%",
  height: "90%"
},
containTextGallery: {
},
textGallery: {
 fontSize: 18,
 fontWeight: "bold",
 padding: 15,
 color: "#FFFF"
},
GalleryRow: {
 width: "100%",
 height: "100%",
 flexDirection: "row",
},
GalleryColOne: {
 width: "49%",
 height: "80%",
 marginRight:"2%"
},
GalleryColTow: {
 width: "49%",
 height: "80%",
 marginRight: "2%",
},
GalleryColin: {
 height: "48%",
 marginBottom: "2%"
},
GalleryColout: {
 height: "49%",
 marginTop: "2%"
},
imageGallery: {
 height:"100%",
 width: "100%",
 resizeMode:"cover",
 borderRadius: 10
},
// end of gallery //
// start Board //
containBoard :{
  marginTop: 30,
  width: Width,
  height: 220,
  backgroundColor: "black",
  padding: 10,
},
subContainBoard:{
  width: "100%",
  height: "100%",
  backgroundColor: "#404040",
  borderRadius: 5,
  padding: 12,
},
conBoard: {
  width: "100%",
  height: "77%",
},
navboard: {
  width: "100%",
  height: 50,
  borderRadius: 5,
  backgroundColor:"black",
  padding: 7,
  flexDirection: "row"
},
board: {
  width: "50%",
  height: "100%",
  backgroundColor: "#404040",
  borderRadius: 5,
  justifyContent: "center"
},
boardText:{
  color: "#FFFF",
  textAlign: "center"
},
opening: {
  width: "50%",
  height: "100%",
  backgroundColor: "black",
  borderRadius: 5,
  justifyContent: "center"
},
openingText: {
  color: "#FFFF",
  textAlign: "center",
},
introducing: {
  width: "100%",
  height: "85%",
  flexDirection: "row",
  marginTop: 12
},
subintroducing: {
  width: "85%",
  height: "100%",
},
containEdite: {
  width:"15%",
  height: "100%",
  justifyContent:"space-between",
  alignItems: "center"
},
introducingText :{
  color: "#FFFF",
  fontSize: 16,
  paddingBottom: 10,

},
// end of board //
// start gym trainers //
containGymTrainers: {
  width: Width,
  height: 280,
  padding: 10,
  marginTop: 30
  
},
subConGymTrainers: {
  width: "100%",
  height: "100%",
},
conTextGymTrainers: {
  width: "100%",
  height: 40,
  justifyContent: "center"
},
textGymTrainers : {
  fontSize: 18,
  fontWeight: "bold",
  paddingLeft: 20,
  color: "#FFFF"
},
imageSilderGymTrain: {
  width: 120,
  height: "100%",
  borderRadius: 5,
  resizeMode: "cover",
  marginRight: 16,
  marginTop: 15,
},
conGymTrainNextBack:{
  width: "100%",
  height: 30,
  marginTop: 60,
  alignItems: 'flex-end',
},
btnNextBack: {
  flexDirection: "row",
  width: "30%",
  justifyContent: "space-between"
},
btnBack:{
  backgroundColor: "#404040",
  paddingHorizontal: 12,
  paddingVertical: 2,
  borderRadius:5,
}
// end gym trainers //



})