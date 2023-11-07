
import { useContext, useState } from "react";import Lottie from "lottie-react";
import registerAnimation from "../../../assets/register.json"

import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../../Hooks/AuthProvider/AuthProvider";
const From = () => {
  const [see,setSee]=useState(false);
  const{userEmail}=useContext(AuthContext);
  const handleRegister =e =>{
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    const user ={name, email, password,photo}
    //password condition
    if(password.length<6){
      swal("password must be at least 6 characters");
      return
    }else if(!/[A-Z]/.test(password)){
      swal("password must be at least  uppercase letter");
      return

     }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      swal("password must be at least a special character");
      return
     }else{
      swal("Good job!", "You are successfully registered", "success");
     }
     
    //email & password  register
    userEmail(email, password)
    .then(result =>{console.log(result)})
    .catch(err =>{console.log(err)});
    
   }

   
    return (
        <div className="w-[97%] mx-auto m-2 ">
           <div className=" bg-blue-300   dark:bg-violet-300  dark:rounded-lg  lg:w-[90%] lg:mx-auto" >
  <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold text-center md:text-4xl lg:ml-[160px] dark:text-black">Register Now!</h1>
      <Lottie animationData={registerAnimation} className="m-3 h-[250px] md:h-[340px] lg:h-[550px] lg::ml-[160px]"></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="url" placeholder="Photo Url" name="photo"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={see? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
          <div className="flex gap-2 justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <span className="text-xm  mt-1 ml-[80px]" onClick={()=>setSee(!see)}>Show password</span>
          </div>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-success text-xl font-bold">Register</button>
        
        <div>
            <p className="text-xl font-bold text-black mt-2 text-center">Already have an account <Link to='/login' className="text-red-700">Login</Link></p>
        </div>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default From;