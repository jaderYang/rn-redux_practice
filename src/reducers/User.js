import * as LoginAction from '../actions/User'

const user = (state = {}, action) => {
  switch (action.type) {
    case LoginAction.LOG_IN_PENDING:
      return Object.assign({}, state,
        {isLoading: true}
      )
    case LoginAction.LOG_IN_REJECTED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:false, errorMsg:action.payload}
      )
    case LoginAction.LOG_IN_FULFILLED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:true, info:action.payload}
      )
    case LoginAction.RC_ERROR:
      return {...state,loginSuccess:false, errorMsg:action.payload}
    case LoginAction.LOG_OUT:
      return Object.assign({}, state)
    default:
      return state;
  }
}

export default user;
