import axios from 'axios'
import React, {  useState } from 'react'
import { useHistory } from 'react-router'
import AuthAPI from '../services/authAPI'

const LoginPage = ({onLogin}) => {

    let history = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState("")
    // gestion des champs 
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget
        setCredentials({ ...credentials, [name]: value })
    }
    // gestion du submit
    const handleSubmit = async event => {
        event.preventDefault()
        try{
           await AuthAPI.authenticate(credentials);
           setError("");
           onLogin(true);
           history.push("/"); 
        }catch(error){
            setError(
                "Aucun compte ne possède cette adresse email"
            );
        }        
    }

    return (  
        <>
        <h1>Connexion</h1>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Email</label>
                <input 
                value={credentials.username}
                onChange={handleChange}
                type="email" 
                placeholder="Adesse email de connecion" 
                name="username" 
                id="username" 
                className={"form-control" + (error && " is-invalid")}
                />           
            {error && <p className="invalid-feedback">{error}</p>}
            </div>
            <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
                <input 
                value={credentials.password}
                onChange={handleChange}
                type="password" 
                placeholder="mot de passe" 
                name="password" 
                id="password"  
                className="form-control"
                />            
            </div>
            <button className="btn btn-primary" type="submit">Connexion</button>
        </form>
        </>
    );
}
 
export default LoginPage;