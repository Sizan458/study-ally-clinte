import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../Hooks/useAxios/useAxios";

const Assignment = ({data}) => {
    
    const {thumbnail,title,level,mark,_id,
    }= data ||{}
    const axios =useAxios()
const handleDelete=()=>{
    axios.delete(`/my-assignment/${_id}`)
    
}
    return (
        <div className="w-[90%] mx-auto">
            <div className="card lg:card-side bg-teal-100  shadow-xl dark:bg-red-200" data-aos="fade-up">
  <figure><img src={thumbnail} className="h-[200px] w-[350px] p-2 rounded-lg md:font-bold md:h-[400px] md:w-[700px] lg:w-[480px] lg:h-[300px] "/></figure>
  <div className="card-body">
    <h2 className="text-[20px]  font-semibold text-black text-center dark:text-teal-700 md:text-xl lg:text-left lg:text-2xl">{title}</h2>
    <div className="grid grid-cols-2 m-2 md:text-center lg:grid-cols-1 lg:text-left lg:text2xl lg:gap-2">
      <div >
         <p className="text-xl font-semibold text-black  dark:text-teal-700 lg:text2xl ">Mark: {mark} </p>
      </div>
      <div>
          <p className="text-xl font-semibold text-black  dark:text-teal-700 lg:text2xl">Level:{level}</p>
      </div>
    </div>
    <div className="card-actions justify-center mx-4 lg:justify-end">
      <div>
     
     <button className="btn btn-success dark:btn-error text-2xl text-black w-[120px] md:w-[210px] lg:w-[180px]" onClick={handleDelete}>
        <MdDeleteForever></MdDeleteForever>
     </button>
     
      </div>
      <div>
     
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Assignment;