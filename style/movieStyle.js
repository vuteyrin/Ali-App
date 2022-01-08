import { Text, View, StyleSheet,Dimensions} from 'react-native';
const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default  StyleSheet.create({
  movie : {
    alignItems: "center",
    justifyContent: "center",
  },
  conSlide: {
      width: Width,
      height: 200,
      backgroundColor: "#FFFF",
      alignItems: "center",
      justifyContent: "center",
  },
  cartSlide: {
      width: "100%",
      height: "100%",
      backgroundColor: "yellow"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',

  },
  imgCart: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 5
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  conbodycart: {
    // flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: "relative",
    
  },
  bodycart: {
    // backgroundColor: "pink",
    width: Width/2.2,
    height: Width/1.5,
    margin: 8
  },
  conTitle: {
    position: "absolute",
    left:1,
    bottom: 1
    
  },
  titleCart: {
    color: "#FFFF"
  },
  renting: {
    flexDirection: "row"
  }
})