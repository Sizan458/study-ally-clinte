import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../NavBar/Nav";
import ErrorPage from "../404Route/ErrorPage";
import Home from "../HomePage/Home/Home";
import Register from "../RegisterPage/Register/Register";


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
        }
    ]
    }
])

export default Router;