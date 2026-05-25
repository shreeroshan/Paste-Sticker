import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


const PlaceholderImage=require("@/assets/sticker-smash-assets/images/background-image.png")
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
     <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#25292e",
  },
  text:{
    color:"rgb(255,255,255)"
  },
  button:{
    backgroundColor:"#fff",
    justifyContent:"center",
    fontSize:20,
    textDecorationLine:"underline"
  },
  imageContainer:{
    flex:1,
  },
  image:{
    width:320,
    height:440,
    borderRadius:18
  },
  footerContainer:{
    flex:1/3,
    alignItems:"center"
  }
}); 
