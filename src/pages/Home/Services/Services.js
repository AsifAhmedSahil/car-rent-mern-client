import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div >
        <div className='text-center my-5'>
        <h1 className='text-5xl text-orange-600 font-bold mb-5'>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti aperiam obcaecati modi laboriosam ipsam?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {
            services.map(service => <ServiceCard key={service._id}/>)
        }
        </div>
        </div>
    </div>
  )
}

export default Services