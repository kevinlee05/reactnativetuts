import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
            <View>
                <Header headerText="Auth App" />
                <Text>Auth App</Text>
            </View>    
        );
    }
}

export default App;