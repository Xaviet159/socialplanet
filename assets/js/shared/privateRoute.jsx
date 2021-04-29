//* Global Imports
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
//* Other Imports
import UserContext from '../../contexts/UserContext'


const PrivateRoute = ({ path, component }) => {
    const { userData } = useContext(UserContext);
    return userData.isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
            <Redirect to="/" />
        )
}

export default PrivateRoute
