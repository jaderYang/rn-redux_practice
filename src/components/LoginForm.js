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

/**
 * custom component
 * @type component
 */
import RCTextFiled from './RCTextFiled.js'
import ConfigImage from '../constants/ConfigImage'
import ConfigColor from '../constants/ConfigColor'
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {
    if (this.props.user.loginSuccess) {
      Actions.main()
    }
  }

  render () {
    return (
      <View style = {styles.container} >
        <Image source={ {uri: ConfigImage.Login_Logo} } style={styles.logoImage} resizeMode={'stretch'}/>
        <RCTextFiled style={styles.inputStyle} imageName={<Image source={ { uri: ConfigImage.Login_Username} }/>} placeHoldStr={'账号'}
          textStr={ this.state.account  } onValueChanged={(text) =>{this.setState({account:text});}}/>
        <RCTextFiled style={styles.inputStyle} imageName={<Image source={ { uri: ConfigImage.Login_Password} }/>} placeHoldStr={'密码'}
          textStr={ this.state.password } onValueChanged={(text) =>{this.setState({password:text});}} isPassword={true} />
        <Button containerStyle={styles.btnContainer} style={styles.btnTextStyle} onPress={() => this.props.action.login(this.state.account, this.state.password)}>
          登录
        </Button>
        <Spinkit style={styles.spinner}
          isVisible={this.props.user.isLoading}  size={50} type={'FadingCircleAlt'} color={'#1e90ff'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  logoImage: {
    marginTop: 80,
    width:screenWidth - 60,
    height: (screenWidth - 60)/300*120,
  },
  inputStyle: {
    marginTop: 16,
    height: 60,
  },
  btnContainer: {
    marginTop: 16,
    height: 60,
    backgroundColor: ConfigColor.NavigationBarBlue,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  btnTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  spinner: {
    position: 'absolute',
    top: screenHeight / 2 - 50,
    left: screenWidth / 2 - 25
  }
});
