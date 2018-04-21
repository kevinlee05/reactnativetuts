// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () =>  (
    <View style={{ flex: 1 }}>  
    {/* flex 1 means expand content to fill entire device. must be added to rootview for scrollview child components to work */}
        <Header headerText={'Albums App!'} />
        <AlbumList />
    </View>
);

// Render the component to the devicee 

AppRegistry.registerComponent('albums', () => App);
