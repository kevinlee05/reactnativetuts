// import libraries for making a component
import React from 'react';
import { Text } from 'react-native';


// make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums App!</Text>;
};


const styles = {
    textStyle:{
        fontSize: 30
    }
}

// make the component available to other parts of the app

export default Header;