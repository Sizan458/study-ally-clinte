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
import Submitted from "../SubmittedPage/Submitted/Submitted";
import Mark from "../MarkPage/Mark/Mark";


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
            loader:({params})=>fetch(`https://study-ally-server.vercel.app/${params.id}`)
        },
        {
            path:"/allAssignments",
            element:<Assignment></Assignment>,
            
        },
        {
            path:"/viewAssignment/:id",
            element:<PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader:({params})=>fetch(`https://study-ally-server.vercel.app/${params.id}`)
        },
        {
            path:"/myAssignments",
            element:<PrivateRoute><MyAssignment/></PrivateRoute>

        },
        {
            path:"/submitted",
            element:<Submitted/>
        },
        {
            path:"/mark/:id",
            element:<Mark/>,
            loader:({params})=>fetch(`https://study-ally-server.vercel.app/${params.id}`)
        }
    ]
    }
])

export default Router;