import { NavLink } from "react-router-dom";
import { Dark } from "../Hooks/Darkmode/Dark";
import { BsSunFill,BsMoonFill } from "react-icons/bs";

const Nav = () => {

    const {changeTheme,mode}=Dark()
    const link=<>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink>Home</NavLink></li>
     <li><NavLink>Home</NavLink></li>
     <li><NavLink>Home</NavLink></li>
        
     <li><NavLink>Home</NavLink></li>
        
    </>
    return (
        <div className="mx-2  ">
           <div className="navbar bg-green-100 rounded-xl  dark:bg-red-100">
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
    <button className="btn btn-error text-2xl  w-[70px] text-black   " onClick={changeTheme}>{mode === "dark"? <BsMoonFill></BsMoonFill>:<BsSunFill></BsSunFill> }</button>
  </div>
</div>
        </div>
    );
};

export default Nav;