import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/Your car (100 × 100 px) (1).svg"
import { AuthContext } from '../../../context/AuthContext/AuthProvider'

const Header = () => {
  const {user} = useContext(AuthContext)

    const MenuItem = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="/">About</Link></li>
        <li className='font-semibold'><Link to="/">Services</Link></li>
        <li className='font-semibold'><Link to="/">Brand</Link></li>
        {
          user?.email ?
          <li className='font-semibold'><Link to="/bookings">Bookings</Link></li>
          :
          
          <li className='font-semibold'><Link to="/login">Login</Link></li>
        }
        <li className='font-semibold'><Link to="/">Contact</Link></li>
    </>

  return (
    <div>
        <div className="navbar  flex justify-center items-center">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
       {MenuItem}
      </ul>
    </div>
    <a href="/" className="mt-4  normal-case text-xl">
    <img src={logo} alt="" className='hidden lg:block md:block' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {MenuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/" className="btn">Get started</a>
  </div>
</div>
    </div>
  )
}

export default Header