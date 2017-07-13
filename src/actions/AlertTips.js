

export const TIP_LOGIC_EORROR = "TIP_LOGIC_EORROR"
export const TIP_CRASH_ERROR = "TIP_CRASH_ERROR"

export const TIP_SUCCESS = "TIP_SUCCESS"
export const TIP_INFO = "TIP_INFO"
export const TIP_CLEAR = "TIP_CLEAR"

export function showLogicTip(errorMsg){
  return {
    type: TIP_LOGIC_EORROR,
    payload: errorMsg || '您的操作存在逻辑问题，别烦开发！'
  }
}

export function showCrashTip(error){
  return {
    type: TIP_CRASH_ERROR,
    payload: error || new Error('系统崩溃啦，快去找开发')
  }
}

export function showSuccess(message){
  return {
    type: TIP_SUCCESS,
    payload: message || '操作成功'
  }
}

export function showInfo(message) {
  return {
    type: TIP_INFO,
    payload: message || '我想告诉你点什么'
  }
}

export function closeTip() {
  return {
    type:TIP_CLEAR
  }
}
