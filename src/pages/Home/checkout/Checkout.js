import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import mer from "../../../assets/audi.jpg";
import { toast } from "react-toastify";

const Checkout = () => {
  const { brand,title, img, price ,_id} = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBooking =(e) =>{
    e.preventDefault();
    const form = e.target;
    const name = `${form.first.value} ${form.last.value}`
    const email = user?.email;
    const message = form.message.value;
    const phone = form.phone.value;


    const booking = {
        service: _id,
        serviceName: title,
        price,
        customer:name,
        email,
        message,
        phone,
        brand,
        img
    }

       fetch("http://localhost:5000/bookings",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(booking)
       })
       .then(res=> res.json())
       .then(data => 
       {
        console.log(data)
        if(data.acknowledged){
            form.reset();
            toast.success(`Your ${brand} Booking Successfully 🙂 `)
        }
       }
        )
       .catch(err => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleBooking}>
        <div className=" flex justify-center items-center flex-col">
          <img src={img} alt="" />
          <h2 className="text-3xl font-bold mt-6 ">{title}</h2>

          <button
            type="button"
            class="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 text-2xl text-black hover:animate-pulse"
          >
            RENT: {price}
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <input
            type="text"
            name="first"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered "
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered "
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered "
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input-bordered input input-ghost w-full "
          />
        </div>
        <textarea
        name="message"
          className="textarea mt-10 w-full textarea-info"
          placeholder="Text Your Message"
        ></textarea>

        <div className="text-center mt-10">
          <input
            type="submit"
            value="Book Your Ride"
            className="btn bg-purple-600 text-white "
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
