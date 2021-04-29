import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminPage = () => {
    return (
       <div className="jumbotron">
      <div>
        <h1 className="display-3">Page des administrateurs</h1>
        <p className="lead">Ici mon client pourra créer ses propres news letters et modifier des projets</p>
        <p className="lead">
        <NavLink className="btn btn-warning btn-lg" to="/" role="button">retour à l'acceuil</NavLink>
        </p>
      </div>
      {/* <img src={oilImg} alt=""/> */}
    </div>  
    )
    
}
 
export default AdminPage;