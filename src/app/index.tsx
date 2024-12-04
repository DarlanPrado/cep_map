import { Text, View } from "react-native";
import CepInsert from "../components/cepInsert";
import { getDataCep } from "../services/cepService";
import { useState, useEffect } from "react";
import CepData from "../components/cepData";
import { DataCep } from "@/types/cepService";
import { useReload } from "../contexts/reaload";

export default function Index() {

  const [cepData, setCep] = useState<DataCep | undefined>(undefined);
  const { load, stop } = useReload();

  const findCepData = (cep: string) => {
    setCep(undefined);
    getDataCep(cep).then(response => {
      setCep(response.data);
    });
  };

  useEffect(() => {
    if (load) {
      findCepData(cepData?.cep || '');
      stop();
    }
  }, [load]);

  return (
    <View className="px-5 py-5" >
      <View className="w-full flex gap-2">
        <CepInsert onPress={(cep) => findCepData(cep)} />
        <CepData data={cepData} />
      </View>
    </View>
  );
}
