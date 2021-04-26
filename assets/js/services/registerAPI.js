import axios from "axios"

function register(userData) {

    await axios 
    .post("https://localhost:8000/api/users", userData)
    .then(response => response)


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