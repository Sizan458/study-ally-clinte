import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
const ShowPdf = ({data}) => {
  const [status ,setStatus] =useState('Pending')
  const{date,description,thumbnail,title,level,mark,Pdf,_id}=data || {};
  const handleSubmit =()=>{
   setStatus('Complete')

  }
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
<p className="text-center text-25px] text-black font-semibold md:text-xl">Status: {status}</p>


<div className="card-actions justify-center ">
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-secondary w-full text-2xl" onClick={()=>document.getElementById('my_modal_5').showModal()}><FaRegCheckCircle/></button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h3 className="text-lg font-bold text-center">Give Mark</h3>
    <p className="text-[13px] text-black m-2 font-semibold md:text-xl">Pdf link :<a href={Pdf}>{Pdf}</a></p>
   <form  className="w-[99%] mx-auto overflow-hidden ml-[5%] md:ml-[15%]">
   <input type="number" placeholder="Mark" className="input input-bordered input-accent w-full max-w-xs m-2" />
   <textarea className="textarea textarea-accent m-2 w-full max-w-xs h-[240px]" placeholder="Feedback"></textarea>
   
   </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-warning w-full" onClick={handleSubmit}>Give Mark</button>
      </form>
    </div>
  </div>
</dialog>
</div>
</div>
</div>
</div>
    );
};

export default ShowPdf;