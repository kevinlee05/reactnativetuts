// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// Create a component
const App = () =>  (
        <Text>Some Text</Text>
        <Text>Some More Text</Text>
    );

// Render the component to the devicee 

AppRegistry.registerComponent('albums', () => App);
