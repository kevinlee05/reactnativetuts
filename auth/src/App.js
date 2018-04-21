import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCGxxUO9Wph8UZ9Oom2b_P-d3q0AJSJ8e8",
            authDomain: "authapp-4068f.firebaseapp.com",
            databaseURL: "https://authapp-4068f.firebaseio.com",
            projectId: "authapp-4068f",
            storageBucket: "authapp-4068f.appspot.com",
            messagingSenderId: "405604740881"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Auth App" />
                <LoginForm />
            </View>    
        );
    }
}

export default App;