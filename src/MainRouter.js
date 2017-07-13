import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  Platform,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import ConfigColor from './constants/ConfigColor'
import ConfigImage from './constants/ConfigImage'

import Login from './containers/Login'
import Bill from './containers/Bill'
import Order from './containers/Order'
import User from './containers/User'
import Account from './containers/Account'

class TabIcon extends React.Component {
    render(){
        return (
          <View style={styles.tabContainer}>
            <Image
              style={styles.tabIcon}
              source={
                {uri:this.props.selected ? this.props.selectedIcon:this.props.normalIcon}
              }
            />
            <Text style={{color: this.props.selected ? ConfigColor.TabbarTextRed :ConfigColor.MainMidGray}}>{this.props.title}</Text>
          </View>
        );
    }
}

const reducerCreate = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  }
}

export default class MainRouter extends Component {
  render() {
    return (
      <Router createReducer = {reducerCreate}>
        <Scene key="modal" component={Modal}>
          <Scene key="root" titleStyle={{color:'#fff'}}
              navigationBarStyle={ {backgroundColor:ConfigColor.NavigationBarBlue, height:Platform.OS === 'ios'?64:44} }
              titleStyle={ {color:'white', fontWeight:'bold'} } >
              <Scene key="login" initial={true} component={Login} hideNavBar={false} title='登录'/>
              <Scene key="main" tabs type="reset"
                    tabBarStyle={{
                      backgroundColor:'#fff',
                      height:56,
                      borderWidth:1,
                      borderColor:'#fff',
                      borderTopColor:ConfigColor.MainLightGray
                    }}>
                <Scene
                  key="tab1" initial={true} hideNavBar={false}
                  component={Bill} title={'账单'} icon={TabIcon}
                  normalIcon={ConfigImage.mainTabBill} selectedIcon={ConfigImage.mainTabBillSelected} navigationBarStyle={
                    {backgroundColor:ConfigColor.NavigationBarBlue,
                    height:Platform.OS === 'ios'?64:44}}
                  titleStyle={{color:'white', fontWeight:'bold'}}
                />
                <Scene
                  key="tab2"  title='订单' icon={TabIcon} component={Order}
                  normalIcon={ConfigImage.mainTabOrder} selectedIcon={ConfigImage.mainTabOrderSelected}
                  navigationBarStyle={
                    {backgroundColor:ConfigColor.NavigationBarBlue,
                    height:Platform.OS === 'ios'?64:44}}
                  titleStyle={{color:'white', fontWeight:'bold'}}
                />
                <Scene
                  key="tab3"  title='用户管理' icon={TabIcon} component={User}
                  normalIcon={ConfigImage.mainTabUser} selectedIcon={ConfigImage.mainTabUserSelected}
                  navigationBarStyle={
                    {backgroundColor:ConfigColor.NavigationBarBlue,
                    height:Platform.OS === 'ios'?64:44}}
                  titleStyle={{color:'white', fontWeight:'bold'}}
                />
                <Scene
                  key="tab4"  title='个人设置' icon={TabIcon} component={Account}
                  normalIcon={ConfigImage.mainTabAccount} selectedIcon={ConfigImage.mainTabAccountSelected}
                  navigationBarStyle={
                    {backgroundColor:ConfigColor.NavigationBarBlue,
                    height:Platform.OS === 'ios'?64:44}}
                  titleStyle={{color:'white', fontWeight:'bold'}}
                />
              </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"transparent",
      justifyContent: "center",
      alignItems: "center",
      borderColor:'red',
      borderWidth:1,
    },
    tabContainer:{
      // borderColor:'red',
      // borderWidth:1,
    },
    tabIcon: {
      alignSelf:'center',
      width: 20,
      height: 20,
      resizeMode: 'stretch',
      marginTop: 4,
      marginBottom: 4,
      borderColor:'red',
    },
});
