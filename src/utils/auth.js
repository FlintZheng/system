import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return sessionStorage.getItem('token')
}

export function isLogin(){
	return sessionStorage.getItem("token") && sessionStorage.getItem("userid")
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
