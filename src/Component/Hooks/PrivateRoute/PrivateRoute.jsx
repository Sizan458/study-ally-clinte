import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from"../../../assets/loading.json"
import { AuthContext } from "../AuthProvider/AuthProvider";
const PrivateRoute = ({children}) => {
    const{user,loading} =useContext(AuthContext)
    const location= useLocation()
   if(loading){
    return<span >
        <Lottie animationData={loadingAnimation} />
    </span>
   }

    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;