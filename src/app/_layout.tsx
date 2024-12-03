import "../styles/global.css"
import { Slot } from "expo-router";

export default function RootLayout() {
  // return (
  //   <Stack >
  //     <Stack.Screen name="index" />
  //   </Stack>
  // );
  return <Slot />
}
