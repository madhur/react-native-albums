import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';

class AlbumDetail extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Card>
                <Text>{this.props.album.title}</Text>
            </Card>
        );
    }
}

export default AlbumDetail;
