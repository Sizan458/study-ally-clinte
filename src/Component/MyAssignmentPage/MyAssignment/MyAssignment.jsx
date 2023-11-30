import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import Assignment from "../Assignment/Assignment";
import Footer from "../../Footer/Footer";


const MyAssignment = () => {
    // call axios hooks
    const assignment =useAxios()
//call tankstack query
const {data:assignments,refetch }=useQuery({
    queryKey:["my-assignment"],
    queryFn:async()=>{
       const result = await assignment.get('/my-assignment')
       refetch()
       return result.data
       
    }
})

      
    return (
        <div>
            <div className="mt-1 m-1 ">
            {
                assignments && assignments.map(data=><Assignment key={data._id} data={data} />)
            }
            </div>
            <div className="w-[90%] mx-auto">
                <Footer/>
            </div>
        </div>
    );
};

export default MyAssignment;