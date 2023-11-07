

import { useLoaderData } from "react-router-dom";
import SingleAssignment from "./SingleAssignment/SingleAssignment";
import Footer from "../Footer/Footer";



const ViewAssignment = () => {
   
    
    
    const assignment=useLoaderData()

    console.log(assignment)
   
    return (
        <div >
            <div className="w-[90%] mx-auto mt-2">
            <SingleAssignment  assignment={assignment}></SingleAssignment>
            </div>
         <div className="mt-2 w-[97%] mx-auto">
         <Footer></Footer>
         </div>
        </div>
    );
};

export default ViewAssignment;