// Import a library to help create a component
import React from 'react';
import ReactNative, { Text, AppRegistry } from 'react-native';


// Create a component
const App = () => {
    return (
        <Text>Some Text </Text>
    );
};

// Render the component to the device  

AppRegistry.registerComponent('albums', () => App);
