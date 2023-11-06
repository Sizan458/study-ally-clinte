import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from"../../../assets/loading.json"
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