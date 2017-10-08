import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [{}, {}, {}] };

    componentWillMount() {
        //console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {


        return this.state.albums.map(album => {


            return (


                <Text key={album.title}>{album.title}</Text>
            );
        });
    }

    render() {
        const movies = this.state.albums.map(album => {


            return (

                <Text key={album.title}>{album.title}</Text>

            );
        });

        return (
            <View>
                {movies}
                {this.renderAlbums()}

            </View>
        );
    }
}

export default AlbumList;
