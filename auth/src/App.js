import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCGxxUO9Wph8UZ9Oom2b_P-d3q0AJSJ8e8",
            authDomain: "authapp-4068f.firebaseapp.com",
            databaseURL: "https://authapp-4068f.firebaseio.com",
            projectId: "authapp-4068f",
            storageBucket: "authapp-4068f.appspot.com",
            messagingSenderId: "405604740881"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }
    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return <Button>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }
    render() {
        return (
            <View style={{minHeight: 110}}>
                <Header headerText="Auth App" />
                {this.renderContent()}
            </View>    
        );
    }
}

export default App;