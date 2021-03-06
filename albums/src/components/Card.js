import React from 'react';
import {View} from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children} 
            {/* passed down from parent component */}
        </View>
    ); 
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd', //light gray
        borderBottomWidth: 0, //hide border bottom
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginTop: 10,
    }
}

export default Card;