import {  useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

PrivateRoute.propTypes ={
    children: PropTypes.node
};
export default PrivateRoute;

// logout er button ta thikkorte HTMLObjectElement, hoyto button na hoye ba a na hoye onno kisu hote pare ota 
// image er link unsplash, imgbb theke nite hobe
// price, short description card e add korte hobe
// navbar e active route banate hobe