//import liraries
import { Mask } from '@/src/utils/mask';
import { DataCep } from '@/types/cepService';
import { View, Text } from 'react-native';

// create a component

interface CepDataProps {
    data: DataCep | undefined;
}

const CepData = ({ data }: CepDataProps) => {

    if(data){
        return (
            <View className='flex gap-2 bg-gray-100 rounded-md px-5 py-5'>
                <Text>CEP: {Mask.maskCep(data.cep)}</Text>
                <Text>{data.street} - {data.neighborhood}, {data.city} - {data.state}</Text>
            </View>
        );
    }
};

export default CepData;
