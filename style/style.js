import { StyleSheet,Dimensions } from 'react-native';
const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Heigth,
    color: "#FFFF",
    // marginTop: 35,
    backgroundColor: "black",
   

  },
  welcome: {
    fontSize: 20
  }
});