//* Global Imports
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
// import { Route } from 'react-router-dom';
//* Components Imports
// import PrivateRoute from './components/shared/PrivateRoute'
// import Login from './components/pages/Login';
// import Layout from './components/shared/Layout';
import Navbar from './js/components/navbar';
import HomePage from './js/pages/homPage';
import LoginPage from './js/pages/loginPage'
import ProjetPage from './js/pages/projetPage'
import AuthAPI from './js/services/authAPI'
import RegisterPage from './js/pages/registerPage'


// import Setup from "./Services/Setup";
// import routes from "./js/routes";
AuthAPI.setup()


// const setup = Setup.CheckAll();
function App() {

    // TODO: il faudrait par defaut qu'on demande à notre AuthAPI si on est connecté ou pas
    const [isAuth, setIsAuth] = useState(
        AuthAPI.isAuth()
        );
     console.log(isAuth)   
    
    const NavbarWithRouter = withRouter(Navbar)
    
    return (
        <HashRouter>
            <NavbarWithRouter isAuth={isAuth} onLogout={setIsAuth} />
            <main className="container pt-5">
                <Switch>
                    <Route path="/login" render={props => <LoginPage onLogin={setIsAuth}/>} />
                    <Route path="/projet" component={ProjetPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>

        </HashRouter>
    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement)
