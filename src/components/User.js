import React, { Component, PropTypes } from 'React'
import {
  View,
  Text,
  TextFiled,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

/**
 *  ## Imports npm Button
 */
import Button from 'react-native-button';
import Spinkit from 'react-native-spinkit';

export default class UserPage extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.action.fetchUsers('');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> 这是这样子的 </Text>
        <Spinkit style={styles.spinner}
          isVisible={this.props.userlist.isLoading}  size={50} type={'FadingCircleAlt'} color={'#1e90ff'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
