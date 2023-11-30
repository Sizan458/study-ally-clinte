import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import Single from "../Single/Single";

const Submitted = () => {
    const axios =useAxios()
    const {data}=useQuery({
        queryKey:['submitted'],
        queryFn:async()=>{
            const result = await axios.get('/all-assignments')
            return result.data.result

        }
    })
   
    return (
        <div>
           <div>
            {
             data && data.map(sub=><Single key={sub._id} sub={sub}/>)
            }
           </div>
        </div>
    );
};

export default Submitted;