import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const{user,loading} =useContext(AuthContext)
    const location= useLocation()
   if(loading){
    return<span className="loading loading-spinner loading-lg ml-[40%] md:ml-[50%]"></span>
   }

    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;