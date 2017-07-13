import * as UsersAction from '../actions/UserList'



export default userlist = (state = {}, action) => {
  switch (action.type) {
    case UsersAction.FETCH_USERS_PENDING:
      return Object.assign({}, state,
        {isLoading: true}
      )
    case UsersAction.FETCH_USERS_REJECTED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:false, errorMsg:action.payload}
      )
    case UsersAction.FETCH_USERS_FULFILLED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:true, info:action.payload}
      )
    case UsersAction.FETCH_USER_DETAIL_PENDING:
      return Object.assign({}, state,
        {isLoading: true}
      )
    case UsersAction.FETCH_USER_DETAIL_REJECTED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:false, errorMsg:action.payload}
      )
    case UsersAction.FETCH_USER_DETAIL_FULFILLED:
      return Object.assign({}, state,
        {isLoading: false,loginSuccess:true, info:action.payload}
      )
    case UsersAction.RC_ERROR:
      return {...state,loginSuccess:false, errorMsg:action.payload}
    default:
      return state;
  }
}
