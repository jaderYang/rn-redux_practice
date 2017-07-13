import { rcGet, rcPost } from '../network/RCNetUtil'


export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING"
export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED"
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED"
export const FETCH_USER_DETAIL = "FETCH_USER_DETAIL"
export const FETCH_USER_DETAIL_PENDING = "FETCH_USER_DETAIL_PENDING"
export const FETCH_USER_DETAIL_FULFILLED = "FETCH_USER_DETAIL_FULFILLED"
export const FETCH_USER_DETAIL_REJECTED = "FETCH_USER_DETAIL_REJECTED"

export function fetchUsers(nickName) {
  return {
    type: FETCH_USERS,
    payload: rcPost('user/search.do',{nickName: nickName||''})
  }
}

export function fetchUserDetail(userNo) {
  return {
    type: FETCH_USER_DETAIL,
    payload: rcPost('user/getUserByUserNo.do', userNo)
  }
}
