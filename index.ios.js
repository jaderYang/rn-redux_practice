/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/Store';
import MainRouter from './src/MainRouter';
import DropdownAlert from 'react-native-dropdownalert'
import { closeTip } from './src/actions/AlertTips'

import setup from './src/setup'

// export default class CCCmsProject extends Component {
//   componentDidMount() {
//     store.subscribe(()=>{
//       var state = store.getState();
//       if (state.tips.needAlert) {
//         this.dropdown.alertWithType(state.tips.alertLeve, state.tips.title, state.tips.message)
//       }
//     })
//   }
//
//   render() {
//     return (
//       <Provider store = { store } >
//       <View  style={{flex: 1}}>
//         <MainRouter/>
//         <DropdownAlert
//           ref={(ref) => this.dropdown = ref}
//           onClose={(data) => this._onClose(data)} />
//       </View>
//       </Provider>
//     );
//   }
//
//   _onClose(data) {
//     store.dispatch(closeTip());
//   }
// }

AppRegistry.registerComponent('CCCmsProject', setup);
