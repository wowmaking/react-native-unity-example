/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent, } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { Unity, UnityResponderView, } from '@wowmaking/react-native-unity'

Unity.init('UICommandsDelegate');
Unity.addEventListener('test', (e) => { console.warn(e); });

class App extends PureComponent {
  render() {
    return (
      <>
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff55', zIndex: 99999999, }}>
          <UnityResponderView style={{ width: '100%', height: '100%', }} />
          <View style={{ justifuContent: 'center', alignItems: 'center', position: 'absolute', top: 20, right: 20, }}>
            <TouchableOpacity onPress={() => Unity._invoke({ entityName: 'Cube', functionName: 'ChangeColor', message: 'yellow' })} style={{ borderWidth: 4, borderColor: '#000' }}>
              <View>
                <Text>yellow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Unity._invoke({ entityName: 'Cube', functionName: 'ChangeColor', message: 'black' })} style={{ borderWidth: 4, borderColor: '#000' }}>
              <View>
                <Text>black</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleResolveCommandBtnPress} style={{ borderWidth: 4, borderColor: '#000' }}>
              <View>
                <Text>resolve</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleRejectCommandBtnPress} style={{ borderWidth: 4, borderColor: '#000' }}>
              <View>
                <Text>reject</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  handleResolveCommandBtnPress = () => {
    Unity.execCommand('resolve_command')
      .then((data) => {
        console.warn('resolve', data);
      })
      .catch((data) => {
        console.warn('reject', data);
      });
  }

  handleRejectCommandBtnPress = () => {
    Unity.execCommand('reject_command')
      .then((data) => {
        console.warn('resolve', data);
      })
      .catch((data) => {
        console.warn('reject', data);
      });
  }

}

export default App;
