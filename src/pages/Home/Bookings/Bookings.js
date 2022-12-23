import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext/AuthProvider'

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings,setBooking] = useState({})


     

    useEffect(() =>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setBooking(data));
    },[user?.email])


  return (
    <div>
        <h2>{bookings.length}</h2>
    </div>
  )
}

export default Bookings