import React, {useState, useRef} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';

const Drawer_: React.FC = () => {
  return (
    <View>
      <Text>I'm in the Drawer!</Text>
      <Button title="Close drawer" />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    width: '50%',
    backgroundColor: '#282E33',
  },
  drawerItem: {
    color: 'white',
  },
});

export {Drawer_};
