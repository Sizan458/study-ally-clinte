import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import ShowAssignment from "../ShowAssignment/ShowAssignment";


const Assignment = () => {
    //using  axios & tanstack queries
    const axios= useAxios();
const assignment =  async()=>{
  const res=  await axios.get('/all-assignments')
  return res;
}

    const {data:assignments} =  useQuery({
        queryKey:["assignments"],
        queryFn:assignment
    })
   
    return (
        <div>
            <div className="w-[90%] mx-auto grid grid-cols-1 gap-2 mt-2  lg:w-[80%] lg:ml-[12%]">
          
          {
          assignments?.data?.result.map(assignment=><ShowAssignment key={assignment._id} assignment={assignment}></ShowAssignment>)
          }
       </div>
        </div>
    );
};

export default Assignment;