import axios from "axios"
import jwtDecode from "jwt-decode"
import { LOGIN_API, USERS_API } from "../services/config"


function logout() {
    window.localStorage.removeItem("authToken")
    delete axios.defaults.headers["Authorization"]
}

function isAdmin() {
  // Y a t'il un token ?
  const token = window.localStorage.getItem("authToken")
  // Token valide ? 
  if(token){
    const { roles } = jwtDecode(token)
    return roles.includes("ROLE_ADMIN")  
  }
  return false
}

function authenticate(credentials) {
     return axios
            .post(LOGIN_API, credentials)
            .then(response => response.data.token)
            .then(token => {
              // je stock mon token dans localStorage
            window.localStorage.setItem("authToken", token)
            // On prévient Axios qu'on a maintenant un header par defaut sur toutes nos futures requetes HTTP
            setAxiosToken(token) 
            console.log("Connexion établit")
            })     
}

function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}
function setup() {
    // Voir si on a un token ?
    const token = window.localStorage.getItem("authToken")
    // le token est il encore valid ? 
    if(token){
      const {exp: expiration} = jwtDecode(token)
      if(expiration * 1000 > new Date().getTime()) {
        setAxiosToken(token)
      } else {
        logout()
      }
    }else{
        logout()
    }
}
function isAuth() {
  // Y a t'il un token ?
  const token = window.localStorage.getItem("authToken")
  // Token valide ? 
  if(token){
    const {exp: expiration, roles} = jwtDecode(token)
    console.log(roles.includes("ROLE_ADMI"))
    if(expiration * 1000 > new Date().getTime()) {
      return true
    }
    return false
  }
  return false
}


export default {
    authenticate,
    logout,
    setup,
    isAuth,
    isAdmin
}