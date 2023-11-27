import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../NavBar/Nav";
import ErrorPage from "../404Route/ErrorPage";
import Home from "../HomePage/Home/Home";
import Register from "../RegisterPage/Register/Register";
import Login from "../LoginPage/Login/Login";
import CreateAssignment from "../CreateAssignment/CreateAssignment";
import UpdateAssignment from "../UpdateAssignment/UpdateAssignment";
import PrivateRoute from "../Hooks/PrivateRoute/PrivateRoute";
import Assignment from "../allAssignmentPage/Assiignment/Assignment";
import ViewAssignment from "../ViewAssignmentPage/ViewAssignment";
import MyAssignment from "../MyAssignmentPage/MyAssignment/MyAssignment";


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
            path:"/updateAssignment/:id",
            element:<UpdateAssignment></UpdateAssignment>,
            loader:({params})=>fetch(`http://localhost:5002/all-assignments/${params.id}`)
        },
        {
            path:"/allAssignments",
            element:<Assignment></Assignment>,
            
        },
        {
            path:"/viewAssignment/:id",
            element:<PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5002/all-assignments/${params.id}`)
        },
        {
            path:"/myAssignments",
            element:<MyAssignment/>

        }
    ]
    }
])

export default Router;