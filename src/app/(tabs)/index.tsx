import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/Emojisticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const PlaceholderImage=require("@/assets/sticker-smash-assets/images/background-image.png")
export default function Index() {
  const [selectedImage,setSelectedImage]=useState<string|undefined>(undefined)
  const [showAppOptions,setShowAppOptions]=useState<boolean>(false)
  const [isModalVisible,setIsModalVisible]=useState<boolean>(false)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing:true,
      quality:1,
    })
    if(!result.canceled){
      console.log(JSON.stringify(result,null,2))
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }else{
      alert("you didn't select any images")
    }
  }

  const onReset=()=>{
    setShowAppOptions(false);
    setSelectedImage(undefined);
    setPickedEmoji(undefined);
  }
  const onAddSticker=()=>{
    setIsModalVisible(true)
  }

  const onModalClose=()=>{
    setIsModalVisible(false)
  }

  const onSaveImageAsync=async()=>{
    if(!selectedImage){
      alert('Please select an image first');
      return;
    }
    try{
      alert('Image saved successfully!');
      setShowAppOptions(false);
      setSelectedImage(undefined);
      setPickedEmoji(undefined);
    }catch(e){
      alert('Failed to save image');
    }
  }
   return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      {isModalVisible && (
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:320,
    height:440,
    borderRadius:18
  },
  footerContainer:{
    flex:1/3,
    alignItems:"center",
    justifyContent: "center",
  },
  optionsContainer: {
    flex:1/3,
    alignItems: "center",
    justifyContent: "center",
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}); 
