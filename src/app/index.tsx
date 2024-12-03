import { Text, View } from "react-native";
import Header from "../components/header";
import CepInsert from "../components/cepInsert";

export default function Index() {
  return (
    <View className="px-5 md:px-10">
      {/* <Header /> */}
      <View className="w-full">
        <CepInsert onPress={(text) => console.log(text)} />
      </View>
    </View>
  );
}
