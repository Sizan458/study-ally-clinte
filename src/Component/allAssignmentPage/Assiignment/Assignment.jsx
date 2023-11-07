import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import ShowAssignment from "../ShowAssignment/ShowAssignment";


const Assignment = () => {
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
          
           {
           assignments?.data?.result.map(assignment=><ShowAssignment key={assignment._id} assignment={assignment}></ShowAssignment>)
           }
        </div>
    );
};

export default Assignment;