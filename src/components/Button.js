import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {

    render() {
        return (
            <TouchableOpacity>
                <Text>Click Me!</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
