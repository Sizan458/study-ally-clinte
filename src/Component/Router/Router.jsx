import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../NavBar/Nav";
import ErrorPage from "../404Route/ErrorPage";
import Home from "../HomePage/Home/Home";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import CreateAssignment from "../CreateAssignment/CreateAssignment";
import UpdateAssignment from "../UpdateAssignment/UpdateAssignment";
import PrivateRoute from "../Hooks/PrivateRoute/PrivateRoute";


const Router =  createBrowserRouter([
    {
    path:"/",
    element:<div>
        <Nav></Nav>
        <Outlet></Outlet>
    </div>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/createAssignment",
            element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
            path:"/updateAssignment",
            element:<UpdateAssignment></UpdateAssignment>
        }
    ]
    }
])

export default Router;