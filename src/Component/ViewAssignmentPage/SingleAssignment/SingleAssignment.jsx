import { Link } from "react-router-dom";


const SingleAssignment = ({assignment}) => {
    
    const{date,description,thumbnail,title,level,mark,Pdf,_id}=assignment || {};
    

    return (
        <div className="w-[90%] mx-auto mt-2">
            <div className="card  bg-base-100 shadow-xl dark:bg-orange-200">
  <figure><img src={thumbnail }alt="Shoes" className="p-4"/></figure>
  <div className="card-body">
    <h2 className="text-[15px] text-black font-semibold md:text-xl md:text-center ">{title}</h2>
    <p className="text-[15px] text-black font-semibold md:text-xl">{description}</p>
    <p className="text-center text-[15px] text-black font-semibold md:text-xl">Submit Date : {date}</p>
    <p className="text-center text-[15px] text-black font-semibold md:text-xl">Level :{level}</p>
    <p className="text-center text-25px] text-black font-semibold md:text-xl">mark: {mark}</p>
    <p className="text-[13px] text-black font-semibold md:text-xl">Pdf link :<a href={Pdf}>{Pdf}</a></p>
    
    <div className="card-actions justify-center ">
    <Link to="/createAssignment" className="w-full">
    <button className="btn btn-outline btn-error w-full text-xl">Take
assignment</button>
    </Link>
    
   
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleAssignment;