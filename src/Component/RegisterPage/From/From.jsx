import Lottie from "lottie-react";
import registerAnimation from "../../../assets/register.json"
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
const From = () => {
    return (
        <div className="w-[97%] mx-auto m-2 ">
           <div className=" bg-blue-300   dark:bg-violet-300  dark:rounded-lg  lg:w-[90%] lg:mx-auto" >
  <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold text-center md:text-4xl lg:ml-[160px]">Register Now!</h1>
      <Lottie animationData={registerAnimation} className="m-3 h-[250px] md:h-[340px] lg:h-[550px] lg::ml-[160px]"></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <div className="flex gap-2 justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p className="text-xm  mt-1 ml-[80px]">Show password</p>
          </div>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-success text-xl font-bold">Register</button>
        <button className="btn btn-outline btn-success text-4xl font-bold mt-4"><AiOutlineGoogle></AiOutlineGoogle></button>
        <div>
            <p className="text-xl font-bold text-black mt-2 text-center">Already have an <Link to='/login' className="text-red-700">Login</Link></p>
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