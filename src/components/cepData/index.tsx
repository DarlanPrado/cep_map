//import liraries
import { Mask } from '@/src/utils/mask';
import { DataCep } from '@/types/cepService';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native';

// create a component

interface CepDataProps {
    data: DataCep | undefined;  // O componente vai receber uma prop chamada `data` do tipo `DataCep`
  }

const CepData = ({ data }: CepDataProps) => {

    if(data){
        return (
            <View className='flex gap-2'>
                <Text>CEP: {Mask.maskCep(data.cep)}</Text>
                <Text>{data.street} - {data.neighborhood}, {data.city} - {data.state}</Text>
            </View>
        );
    }
};

export default CepData;
