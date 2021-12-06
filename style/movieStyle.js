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
      width: "95%",
      height: "95%",
      backgroundColor: "yellow"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
})