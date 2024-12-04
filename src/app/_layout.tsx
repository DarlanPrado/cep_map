import '../styles/global.css'
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { ReloadProvider } from "../contexts/reaload";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ReloadProvider>
          <ScrollView style={{ flex: 1 }}>
            <Slot />
          </ScrollView>
        </ReloadProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
