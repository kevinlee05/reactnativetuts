import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] }; //initialize state to an empty albums array

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data})); //update component state with the api data
        // do not use this.state = {}
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );    
    }
};

export default AlbumList;