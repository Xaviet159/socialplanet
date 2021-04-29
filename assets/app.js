//* Global Imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter, Redirect } from "react-router-dom";
// component import
import Navbar from './js/components/navbar';
import HomePage from './js/pages/homPage';
import LoginPage from './js/pages/loginPage'
import ProjetPage from './js/pages/projetPage'
import AuthAPI from './js/services/authAPI'
import RegisterPage from './js/pages/registerPage'
import AdminPage from './js/pages/adminPage'



// import Setup from "./Services/Setup";
// import routes from "./js/routes";
AuthAPI.setup()

const PrivateRoute = ({ path, isAuth, component }) => {
    return isAuth ? (
        <Route exact path={path} component={component} />
    ) : (
            <Redirect to="/login" />
        )
}

const AdminRoute = ({ path, isAdmin, component }) => {
    return isAdmin ? (
        <Route exact path={path} component={component} />
    ) : (
            <Redirect to="/" />
        )
}

// const setup = Setup.CheckAll();
function App() {

    // TODO: il faudrait par defaut qu'on demande à notre AuthAPI si on est connecté ou pas
    const [isAuth, setIsAuth] = useState(
        AuthAPI.isAuth()
        );
    const [isAdmin, setIsAdmin] = useState(
        AuthAPI.isAdmin()
    );
    
     console.log(isAuth)   
    
    const NavbarWithRouter = withRouter(Navbar)
    
    return (
        <HashRouter>
            <NavbarWithRouter isAuth={isAuth} onLogout={setIsAuth} />
           
            <main className="container pt-5">
                <Switch>
                    <Route path="/login" render={props => <LoginPage onLogin={setIsAuth}/>} />
                    <Route path="/project" component={ProjetPage} />
                    <Route path="/register" component={RegisterPage} />
                    <AdminRoute path="/admin" isAdmin={isAdmin} component={AdminPage} />
                    <Route path="/" component={HomePage} />
                    
                </Switch>
            </main>

        </HashRouter>
    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement)
