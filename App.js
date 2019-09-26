/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { Unity, UnityView, } from '@wowmaking/react-native-unity'

Unity.init();
Unity.addListener('UnityMessage', console.warn);

const App: () => React$Node = () => {
  return (
    <>
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff55', zIndex: 99999999, }}>
        <UnityView style={{ width: '100%', height: '100%', }} />
        <View style={{ justifuContent: 'center', alignItems: 'center', position: 'absolute', top: 50, right: 50, }}>
          <TouchableOpacity onPress={() => Unity.invoke('Cube', 'ChangeColor', 'yellow')} style={{ borderWidth: 10, borderColor: '#000' }}>
            <View>
              <Text>AAAAAA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
