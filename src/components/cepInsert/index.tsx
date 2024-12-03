//import liraries
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native';

// create a component

type CepInsertProps = {
    onPress: (value: string) => void;
};

const CepInsert = ({onPress}: CepInsertProps) => {

    const [text, onChangeText] = useState('');    

    return (
        <View className='flex gap-2'>
            <Text>CEP</Text>
            <TextInput placeholder='00.000-000' className='rounded-md py-2 px-2 bg-gray-300 border-0' onChangeText={onChangeText} value={text} />
            <TouchableOpacity onPress={() => onPress(text)} className='w-full h-10 bg-cyan-400 flex justify-center rounded-md'>
                <Text className='text-center' >Buscar CEP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CepInsert;
