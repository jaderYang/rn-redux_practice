import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserPage from '../components/User'
import * as UsersAction from '../actions/UserList.js'

function mapStateToProps(state, prop) {
  return {
    userlist: state.userlist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(UsersAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
