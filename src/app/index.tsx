import { Text, View } from "react-native";
import CepInsert from "../components/cepInsert";
import { getDataCep } from "../services/cepService";
import { useState } from "react";
import CepData from "../components/cepData";
import { DataCep } from "@/types/cepService";

export default function Index() {

  const [cepData, setCep] = useState<DataCep | undefined>(undefined);

  const findCepData = (cep: string) => {
    setCep(undefined);
    const cepData = getDataCep(cep).then(response => {
      setCep(response.data);
    });
  }

  return (
    <View className="px-5 md:px-10">
      {/* <Header /> */}
      <View className="w-full">
        <CepInsert onPress={(cep) => findCepData(cep)} />
        <CepData data={cepData} />
      </View>
    </View>
  );
}
