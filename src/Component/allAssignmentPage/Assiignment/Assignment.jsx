import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import ShowAssignment from "../ShowAssignment/ShowAssignment";
import { useState } from "react";

import Footer from "../../Footer/Footer";

//declare level here
const level =[
    "Easy",
    "Medium",
    "Hard"
]
const Assignment = () => {
    //fetch level data
 
    //fill level
    const [select,setSelect] = useState('')
    //paginate level
    const [page ,setPage] = useState('')
    //using  axios & tanstack queries
    const axios= useAxios();
const assignment =  async()=>{
  const res=  await axios.get(`/all-assignments?level=${select}`)
  
  return res;
}

    const {data:assignments} =  useQuery({
        queryKey:["assignments",select],
        queryFn:assignment
    })
   

 
    return (
        <div>
            <div className="flex justify-end m-3">
            <select onChange={(e)=>setSelect(e.target.value)} className="select select-info dark:select-accent ">
  <option disabled selected>Select Level</option>
  {
 level && level.map(item=><option value={item} key={item} className="text-[15px]">{item}</option>)
  }
  <option></option>
  
</select>
            </div>
            <div className="w-[90%] mx-auto grid grid-cols-1 gap-2 mt-2  lg:w-[80%] lg:ml-[12%]">
          
          {
         assignments && assignments?.data?.result.map(assignment=><ShowAssignment key={assignment._id} assignment={assignment}></ShowAssignment>)
          }
       </div>
       <div className="mt-2 w-[97%] mx-auto "> 
    <Footer></Footer>
</div>
       
        </div>
    );
};

export default Assignment;