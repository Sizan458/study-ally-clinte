
import { FaMarker } from "react-icons/fa";
import { Link } from "react-router-dom";



const Single = ({sub}) => {
  
   
    console.log(sub)
    const {thumbnail,title,level,mark,_id,status,email,Pdf

    }= sub
   
   
       
    return (
        <div className="w-[90%] mx-auto"> 
            <div className="card lg:card-side bg-teal-100  shadow-xl dark:bg-red-200 m-2" >
  <figure><img src={thumbnail} className="h-[200px] w-[350px] p-2 rounded-lg md:font-bold md:h-[400px] md:w-[700px] lg:w-[480px] lg:h-[300px] "/></figure>
  <div className="card-body">
    <h2 className="text-[20px]  font-semibold text-black text-center dark:text-teal-700 md:text-xl lg:text-left lg:text-2xl">{title}</h2>
    <div className="grid grid-cols-1 m-2 md:text-center lg:grid-cols-1 lg:text-left lg:text2xl lg:gap-2">
      <div >
         <p className="text-xl font-semibold text-black  dark:text-teal-700 lg:text2xl ">Mark: {mark} </p>
      </div>
      <div >
         <p className="text-xl font-semibold text-black  dark:text-teal-700 lg:text2xl ">Level: {level} </p>
      </div>
      <div>
       <p className="m-2  text-black font-medium  dark:text-teal-700 lg:text2xl ">{email}</p>
      </div>
      
      
    </div>
    <div className="card-actions justify-center mx-4 lg:justify-end">
      <div>

      </div>
   <Link to={`/mark/${_id}`}>
   <button className="btn btn-outline btn-error w-full text-xl"><FaMarker/></button>
   </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Single;