import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)  
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooking(data);
      });
  }, [user?.email]);

  return (
    <div>
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <div className="text-red-600">DELETE</div>
                </label>
              </th>
              <th>image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Service</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking) => (
                <BookingRow key={booking._id} booking={booking}></BookingRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
