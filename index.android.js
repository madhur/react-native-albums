// Index.ios.js - Place code here in for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => {
  return (
    <View>
      <Header headerText={'Albums123'} />
      <AlbumList />
    </View>

  );
};


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
