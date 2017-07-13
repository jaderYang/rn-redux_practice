import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OrderPage from '../components/Order'
import * as UserAction from '../actions/User'

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

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
