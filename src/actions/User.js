
import { rcGet, rcPost } from '../network/RCNetUtil'
import { showLogicTip } from './AlertTips'
export const LOG_IN = "LOG_IN"
export const RC_ERROR = "RC_ERROR"
export const LOG_IN_PENDING = "LOG_IN_PENDING"
export const LOG_IN_FULFILLED = "LOG_IN_FULFILLED"
export const LOG_IN_REJECTED = "LOG_IN_REJECTED"

export const LOG_OUT = "LOG_OUT"

export function login(username, password) {
  if (!!username && !!password) {
    return {
      type:LOG_IN,
      payload:rcPost("mobile/login.do", {username, password})
    }
  } else {
    return showLogicTip('用户名密码 不能为空');
  }

}

export function logout(){
  return {
    type: LOG_OUT,
    payload: {}
  }
}
