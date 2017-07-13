import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BillPage from '../components/Bill'
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

export default connect(mapStateToProps, mapDispatchToProps)(BillPage)
