import {  useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";
import useAxios from "../Hooks/useAxios/useAxios";




const UpdateAssignment = () => {
  const axios = useAxios()
    const[selectDate ,setSelectDate] =useState();
    //fetch data
    const userUpdate = useLoaderData()
    const {Pdf,date,description,email,level,mark,thumbnail,title}=userUpdate
      
    const handleUpdate =e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const tittle = e.target.tittle.value;
    const  date = e.target.date.value;
    const level = e.target.level.value;
    const mark = e.target.mark.value
    const description = e.target.description.value
    const pdf = e.target.pdf.value
    const img= e.target.url.value
    const user ={email, tittle,description, level, mark,date,pdf,img}
    console.log(user)

   
      axios.put('/all-assignments', user)
    .then( res=>{console.log(res)}) 
    .then(err=>{console.log(err)})
    
    }
    
    return (
        <div>
          <div>
                <h1 className="text-xl font-bold m-3 text-center text-teal-500 dark:text-green-700 md:text-2xl">Update Your Assignment here</h1>
                </div>
            <div className="hero  w-[95%] mx-auto m-2  rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/ctWkszK/pexels-irina-iriser-1090977.jpg)'}}>
              
  <div className="hero-content " >
    <form onSubmit={handleUpdate}>
      <div className=" grid grid-cols-1 gap-5 m-1 form-control md:grid-cols-2">
      <input type="email" placeholder="Enter your login email" defaultValue={email} name="email" className="input input-bordered input-error text-black  w-[300px] md:w-[280px] lg:w-[370px]" />
      <input type="text" placeholder="Tittle" name="tittle" defaultValue={title} className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]" />
      </div>
      <div className=" grid grid-cols-1 gap-5 m-3 form-control md:grid-cols-2">
      <input type="url" placeholder="Thumbnail
 Image URL" name="url" defaultValue={thumbnail}  className="input input-bordered input-error   w-[300px] md:w-[280px] lg:w-[370px]" />
     <DatePicker selected={selectDate} onChange={date=>setSelectDate(date)} value={date}  name="date" dateFormat="yyyy/MM/dd" placeholderText="Submission Date" className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]"/>
      </div>
      <div className=" grid grid-cols-1 gap-5 m-3 form-control md:grid-cols-2  ">
     
     <select name="level"   placeholder="Assignment Level" defaultValue={level}  className="select select-error w-[300px] md:w-[280px] lg:w-[370px] ">
  
  <option value='Easy'>Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
  
</select>
     
    

      <input type="number" placeholder="Mark" defaultValue={mark} name="mark" className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]" />

      </div>
      <div className=" form-control mt-4">
     
      <input type="url" placeholder="Put your pdr link here" defaultValue={Pdf} name="pdf" className="input input-bordered input-error  w-[300px]  md:w-[590px] lg:w-[780px]" />

     </div>
      <div className=" form-control mt-4">
     
      <textarea  name="description" defaultValue={description} className="textarea textarea-error w-[300px] h-[250px] md:w-[590px] lg:w-[780px]" placeholder="Description"></textarea>

      </div>
     
      <button className="btn glass w-full mt-3 text-red-700 text-xl">Update Assignment</button>
    </form>
  </div>
</div>
<div className="w-[97%] mx-auto">
  <Footer></Footer>
</div>
        </div>
    );
};

export default UpdateAssignment;