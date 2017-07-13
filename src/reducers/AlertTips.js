import * as TipAction from '../actions/AlertTips'


export default tips = (state = {}, action) => {
  switch (action.type) {
    case TipAction.TIP_SUCCESS:
      return {...state, needAlert: true, alertLeve: 'success', title:'成功', message: action.payload}
    case TipAction.TIP_INFO:
      return {...state, needAlert: true, alertLeve: 'info', title:'提示', message: action.payload}
    case TipAction.TIP_LOGIC_EORROR:
      return {...state, needAlert: true, alertLeve: 'error', title:'错误', message: action.payload}
    case TipAction.TIP_CRASH_ERROR:
      return {...state, needAlert: true, alertLeve: 'error', title:'崩溃', message: action.payload}
    case TipAction.TIP_CLEAR:
      return {...state, needAlert: false, alertLeve: 'error', message: ''}
    default:
      return state
  }
}
