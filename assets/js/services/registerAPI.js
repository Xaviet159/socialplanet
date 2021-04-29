import axios from "axios"
import { LOGIN_API, USERS_API } from "./config"

function register(userData) {

    await axios 
    .post(USERS_API, userData)
    .then(response => response)
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