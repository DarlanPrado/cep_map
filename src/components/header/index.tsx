//import liraries
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable, TouchableHighlight } from 'react-native';

// create a component
const Header = () => {
    return (
        <View className='w-full flex flex-row items-center justify-end px-5 py-2'>
            <TouchableHighlight className='w-10 h-10 bg-gray-400'>
                <Ionicons name='notifications-outline' size={20} />
            </TouchableHighlight>
        </View>
    );
};

export default Header;
