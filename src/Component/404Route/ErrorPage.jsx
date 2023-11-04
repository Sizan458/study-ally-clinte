import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center  align-middle mt-[10%]">
           <div className="card card-compact   bg-transparent  dark:bg-emerald-500">
  <figure><img src="https://i.ibb.co/pR9wKyD/404.gif" className="h-[350px]" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center ">
      <Link to='/'>
      <button className="btn btn-error w-full text-xl  text-black">Go to home</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;