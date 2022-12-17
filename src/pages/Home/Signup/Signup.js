import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import login from "../../../assets/log.jpg";
import { AuthContext } from '../../../context/AuthContext/AuthProvider';

const Signup = () => {
  const {createUser} = useContext(AuthContext)
    const handlesignUp = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        createUser(email,password)
        .then(result =>{
          const user = result.user
          console.log(user)
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div>
      <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 gap-10 flex-col  lg:flex-row">
          <div className="text-center  lg:text-left">
            <img src={login} className="w-3/4" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 py-9">
            <form onSubmit={handlesignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center my-7 text-orange-500 animate-bounce">
                  Sign Up
                </h1>
                <div className="form-control">
                
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                

              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-orange-500 text-white border-0"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="text-center font-bold">Already Login?  <Link to="/login" className="text-orange-500 "> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup