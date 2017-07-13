import { combineReducers } from 'redux'
import user from  './User'
import tips from './AlertTips'
import userlist from './UserList'

const rootReducer = combineReducers({
    user,
    tips,
    userlist
})

export default rootReducer
