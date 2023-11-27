import {  useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from "../Footer/Footer";

import useAxios from "../Hooks/useAxios/useAxios";


const CreateAssignment = () => {
  const axios =useAxios()
    //react date pick plugin
    const[selectDate ,setSelectDate] =useState(null);
   
    const handleCreate =e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const tittle = e.target.tittle.value;
    const  date = e.target.date.value;
    const level = e.target.level.value;
    const mark = e.target.mark.value
    const description = e.target.description.value
    const pdf =  e.target.pdf.value
    const url= e.target.url.value
    const user ={email, tittle,description, level, mark,date,pdf,url}

    
//put data to data base
   
    axios.post('/all-assignments',user)
   .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    // put dat into database
    axios.post('/my-assignment',user)
   .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    }


   
    return (
        <div>
          <div>
                <h1 className="text-xl font-bold m-3 text-center text-teal-500 dark:text-green-700 md:text-2xl">Create Your Assignment here</h1>
                </div>
            <div className="hero  w-[95%] mx-auto m-2  rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/BsvTtRP/pexels-pratik-gupta-2748716.jpg)'}}>
              
  <div className="hero-content " >
    <form onSubmit={handleCreate}>
      <div className=" grid grid-cols-1 gap-5 m-1 form-control md:grid-cols-2">
      <input type="email" placeholder="Enter your login email" name="email" className="input input-bordered input-error text-black  w-[300px] md:w-[280px] lg:w-[370px]" />
      <input type="text" placeholder="Tittle" name="tittle" className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]" />
      </div>
      <div className=" grid grid-cols-1 gap-5 m-3 form-control md:grid-cols-2">
      <input type="url" placeholder="Thumbnail
 Image URL" name="url"  className="input input-bordered input-error   w-[300px] md:w-[280px] lg:w-[370px]" />
     <DatePicker selected={selectDate} onChange={date=>setSelectDate(date)} name="date" dateFormat="yyyy/MM/dd" placeholderText="Submission Date" className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]"/>
      </div>
      <div className=" grid grid-cols-1 gap-5 m-3 form-control md:grid-cols-2  ">
     
     <select name="level"   placeholder="Assignment Level"  className="select select-error w-[300px] md:w-[280px] lg:w-[370px] ">
  <option value="Assignment Level" selected disabled>Assignment Level</option>
  <option value='Easy'>Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
  
</select>
     
    

      <input type="number" placeholder="Mark" name="mark" className="input input-bordered input-error  w-[300px] md:w-[280px] lg:w-[370px]" />

      </div>
      <div className=" form-control mt-4">
     
      <input type="url" placeholder="Put pdf link here" name="pdf" className="input input-bordered input-error  w-[300px]  md:w-[590px] lg:w-[780px]" />
     </div>
      <div className=" form-control mt-4">
     
      <textarea  name="description" className="textarea textarea-error w-[300px] h-[250px] md:w-[590px] lg:w-[780px]" placeholder="Description"></textarea>

      </div>
     
      <button className="btn glass w-full mt-3 text-rose-700 text-xl">Create Assignment</button>
    </form>
  </div>
</div>
<div className="w-[97%] mx-auto">
  <Footer></Footer>
</div>
        </div>
    );
};

export default CreateAssignment;