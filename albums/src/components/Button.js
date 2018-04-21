import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//touchable opacity is a button class

const Button = () => {
    return (
        <TouchableOpacity>
        <Text>
            Click Me!!!
        </Text>
        </TouchableOpacity>
    );
}

export default Button;