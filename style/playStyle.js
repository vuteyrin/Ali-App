import { Text, View, StyleSheet,Dimensions} from 'react-native';
const Heigth = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
      },
      video: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: Width,
        height: 200,
        // transform: [
        //   { rotateY: "0deg" },
        //   { rotateZ: "90deg" }
        // ],
    
        // marginTop: 10,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      conTitle: {
        //  backgroundColor: "red",
         width: Width,
        //  height: 130,
         padding: 5,
         
      },
      title: {
        //   backgroundColor: "#FFFF"
      },
      titleText: {
          fontSize: 18,
          color: "#FFFF"
      },
      subTitle: {
        color: "#FFFF",
        fontSize: 10,
      },
      renting: {
        flexDirection: "row"
      },
      btnPlay: {
        width: 100,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          marginVertical: 10,
          borderRadius: 5,
          // transform: [
          //   { rotateY: "0deg" },
          //   { rotateZ: "90deg" }
          // ],
      },
      btnPlayText: {
          color: "#FFFF"
      }
})