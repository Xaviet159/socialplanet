import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const RegisterPage = () => {
    
    
    let history = useHistory();
      

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState("")

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://127.0.0.1:8000/api/users', {
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                "password": userData.password
            })
            .then(response => response.userData)

            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })
            history.push("/login") 
        }catch(error){
            console.log(error.response.data.violations)
        }


    }

  return (
        <>
     <h2>Ajouter un Utilisateur</h2>
         {/* <h2>Modification d'un Utilisateur</h2> */}

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <textarea onChange={handleChange} type="text" error={errors.firstName} className="form-control" name="firstName" id="firstName" rows="3" value={userData.firstName}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <textarea onChange={handleChange} type="text" error={errors.lastName} className="form-control" name="lastName" id="lastName" rows="3" value={userData.lastName}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <textarea onChange={handleChange} type="email" error={errors.email} className="form-control" name="email" id="email" rows="3" value={userData.email}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input onChange={handleChange} type="password" error={errors.password} className="form-control" name="password" id="password" value={userData.password} />
            </div>
            <button type="submit" className="btn btn-primary">Ajouter</button> 
            {/* || <button type="submit" className="btn btn-primary">Modifier</button> */}
        </form>
        </>
  )
}

export default RegisterPage