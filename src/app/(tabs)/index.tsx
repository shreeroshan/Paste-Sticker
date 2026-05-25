import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen.</Text>
      <Link href={"/about"} style={styles.button}>
      Go to About Screen
      </Link>
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
  }
}); 
