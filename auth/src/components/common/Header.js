// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// View tag is used to position elements

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        
    );
};


const styles = {
    viewStyle :{
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.9, //darkness of shadow
        elevation: 2,
        position: 'relative',
    },
    textStyle:{
        fontSize: 30,
    }
}

// make the component available to other parts of the app

export  {Header};