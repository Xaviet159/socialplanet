import axios from "axios"
import jwtDecode from "jwt-decode"


function logout() {
    window.localStorage.removeItem("authToken")
    delete axios.defaults.headers["Authorization"]
}

function authenticate(credentials) {
     return axios
            .post("https://127.0.0.1:8000/api/login_check", credentials)
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
    axios.defaults.headers["Authorization"] = `Bearer ${data.token}`; 
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

export default {
    authenticate,
    logout,
    setup
}