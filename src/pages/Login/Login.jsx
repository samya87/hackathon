import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  
  const {loginUser}= useContext(AuthContext);
    
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const password = form.get('password');

    loginUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error=>{
      console.error(error);
    })
  }

  return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p className="text-center mt-3">Dont have an account? <Link to={"/register"} className="text-blue-600 font-semibold">Register</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <Link to={"/"}><button className="btn btn-primary">Home</button></Link>
        
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;