import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginForm from '../components/LoginForm'
import * as UserAction from '../actions/User'
import { AsyncStorage } from 'react-native'

function mapStateToProps(state, prop) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(UserAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
