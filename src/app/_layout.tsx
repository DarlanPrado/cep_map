import { View } from "react-native";
import "../styles/global.css"
import { Slot } from "expo-router";

export default function RootLayout() {
  // return (
  //   <Stack >
  //     <Stack.Screen name="index" />
  //   </Stack>
  // );
  return (
    <View style={{marginTop: 0}} >
      <Slot />
    </View>
  )
}
