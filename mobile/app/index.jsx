import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. 123</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container:{
    backgroundColor: "beige",
  }
})
