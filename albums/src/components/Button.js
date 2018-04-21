import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//touchable opacity is a button class

const Button = () => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                Click Me!!!
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1, //expand to fill content space
        alignSelf: 'stretch', //stretch to fill container
        bakgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff', //ios blue
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;