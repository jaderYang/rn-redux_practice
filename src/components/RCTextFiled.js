import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

export default class RCTextFiled extends Component {
  static PropTypes = {
    imageName: PropTypes.any,
    placeHoldStr: PropTypes.string.req,
    onValueChanged: PropTypes.fun,
    isPassword: PropTypes.bool,
    textStr: PropTypes.string,
  }
  render() {
    var {imageName, placeHoldStr, onValueChanged, isPassword, textStr} = this.props;

    return(
      <View style={[styles.container, this.props.style]}>
        {imageName}
        <TextInput style={ styles.textInputBlock } placeholder={placeHoldStr} onChangeText={onValueChanged}
          secureTextEntry={isPassword} value={textStr} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems:'center'
  },
  frontIcon: {
    width: 40,
    height: 40,
  },
  textInputBlock: {
    marginLeft: 8,
    flex: 1,
  }
})
