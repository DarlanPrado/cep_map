// Import libraries
import { Mask } from '@/src/utils/mask';
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

// Define prop types
type CepInsertProps = {
    onPress: (value: string) => void;
};

const CepInsert = ({ onPress }: CepInsertProps) => {
    // State to handle the input text (unformatted)
    const [text, onChangeText] = useState('');

    // Handle key press event for the TextInput (check for 'Enter' key)
    const pressKeyInput = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (event.nativeEvent.key === 'Enter') {
            onPress(text); // Call the onPress prop with the value
        }
    };

    return (
        <View className="flex gap-2">
            <Text>CEP</Text>
            {/* TextInput for user input, applies mask to the value */}
            <TextInput
                placeholder="00000-000"
                className="rounded-md py-2 px-2 bg-gray-300 border-0"
                onChangeText={onChangeText}
                value={Mask.maskCep(text)} // Apply mask here
                maxLength={9}
                autoComplete="postal-code"
                autoFocus={true}
                onKeyPress={pressKeyInput} // Event handler for key press
            />
            {/* Button to trigger the onPress action */}
            <TouchableOpacity
                onPress={() => onPress(text)} // Call onPress with the unformatted value
                className="w-full h-10 bg-cyan-400 flex justify-center rounded-md"
            >
                <Text className="text-center">Buscar CEP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CepInsert;
