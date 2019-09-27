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
Unity.addEventListener('test', (e) => { console.warn(e); });

const App: () => React$Node = () => {
  return (
    <>
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff55', zIndex: 99999999, }}>
        <UnityView style={{ width: '100%', height: '100%', }} />
        <View style={{ justifuContent: 'center', alignItems: 'center', position: 'absolute', top: 20, right: 20, }}>
          <TouchableOpacity onPress={
            () => {
              Unity.invoke({
                entityName: 'UICommandsDelegate',
                functionName: 'HandleCommand',
                message: JSON.stringify({
                  id: 123,
                  name: 'TEST_COMMAND',
                  // data: {
                  //   a: 123,
                  //   b: 'asd',
                  // },
                }),
              });
            }
          } style={{ borderWidth: 4, borderColor: '#000' }}>
            <View>
              <Text>yellow</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Unity.invoke({ entityName: 'Cube', functionName: 'ChangeColor', message: 'black' })} style={{ borderWidth: 4, borderColor: '#000' }}>
            <View>
              <Text>black</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
