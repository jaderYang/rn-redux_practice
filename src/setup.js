import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';

import { Provider } from 'react-redux';
import store from './Store';
import MainRouter from './MainRouter';
import DropdownAlert from 'react-native-dropdownalert'
import { closeTip } from './actions/AlertTips'

export default function setup(): React.Component {

  class Root extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
      };
    }

    componentDidMount() {
      store.subscribe(()=>{
        var state = store.getState();
        if (state.tips.needAlert) {
          this.dropdown.alertWithType(state.tips.alertLeve, state.tips.title, state.tips.message)
        }
      })
    }

    render() {
      return (
        <Provider store = { store } >
          <View  style={{flex: 1}}>
            <MainRouter/>
            <DropdownAlert
              ref={(ref) => this.dropdown = ref}
              onClose={(data) => this._onClose(data)} />
          </View>
        </Provider>
      );
    }

    _onClose(data) {
      store.dispatch(closeTip());
    }
  }

  return Root;
}
