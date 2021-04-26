import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthAPI from "../services/authAPI"

const Navbar = () => {

  const handleLogout = () => {
    AuthAPI.logout()
  }

    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Social Planet</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><NavLink to="/register" className="nav-link">Inscription</NavLink></li>
        <li className="nav-item">
          <NavLink to="/login" className="btn btn-success">Connexion</NavLink>
        </li>
        <li className="nav-item">
          <button 
          onClick={handleLogout} 
          className="btn btn-danger"
          >
            Déconexion</button>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav> 
  );
}
 
export default Navbar;