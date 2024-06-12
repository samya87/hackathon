import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    const handleSignOut = () => {
      logOut()
        .then()
        .catch()
    }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Sponser Us</a></li>
        <li>
          <a>Mentor</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <img src="hackathon_logo.png" className="w-48"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Sponser Us</a></li>
      <li>
        <details>
          <summary>Mentor</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  {
    user? <div className="navbar-end">
      {/* <a className="btn" >Log out</a> */}
    <a className="btn" onClick={handleSignOut}>Log out</a>
  </div> 
  : <div className="navbar-end">
  <Link to={"/login"}><a className="btn">Login</a></Link>
</div> 
  }
  
</div>
    );
};

export default Navbar;