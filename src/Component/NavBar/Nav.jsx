import { Link, NavLink } from "react-router-dom";
import { Dark } from "../Hooks/Darkmode/Dark";
import { BsSunFill,BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider/AuthProvider";

const Nav = () => {
  const{user,logOut}=useContext(AuthContext)
  //log out the user
  const handleLogOut = () => {
    logOut();
  }

    const {changeTheme,mode}=Dark()
    const link=<>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/allAssignments'>All Assignment</NavLink></li>
     <li><NavLink to='/myAssignments'>My Assignment</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
        
     <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/submitted'>Submit Assignment</NavLink></li>
        
    </>
    return (
        <div className="mx-2  ">
           <div className="navbar  bg-[#b3d9ff] dark:bg-emerald-200 rounded-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {link}
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <img src="https://i.ibb.co/wdHrP5r/studyally-logo-thumbnail-removebg-preview.png" className="h-[70px]"/>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle text-2xl   text-black  m-2 " onClick={changeTheme}>{mode === "dark"? <BsMoonFill></BsMoonFill>:<BsSunFill></BsSunFill> }</button>
     {/*dynamic show user */}
    <div className="flex flex-col">
      {
        user?<div>
           <div className="tooltip tooltip-left" data-tip={user.displayName}>
  <button className="btn btn-circle "><div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li><button className="btn btn-error btn-sm"  onClick={handleLogOut}>Logout</button></li>
    </ul>
  </div></button>
</div>
        </div>
        :<Link to="/login"><button className="btn btn-error " >Login</button></Link>
      }
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Nav;