

const Nav = () => {
    return (
        <div className="m-2  ">
           <div className="navbar bg-green-300 rounded-xl  dark:bg-red-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <img src="https://i.ibb.co/wdHrP5r/studyally-logo-thumbnail-removebg-preview.png" className="h-[70px]"/>
  </div>
  <div className="navbar-end">
    <button className="btn btn-neutral">login</button>
  </div>
</div>
        </div>
    );
};

export default Nav;