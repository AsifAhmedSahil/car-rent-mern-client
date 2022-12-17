import React from "react";

const ServiceCard = ({service}) => {
    const {title,img,price,brand} = service
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-[270px] w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="  text-start text-xl">Rent: {price}</p>
          <p className="  text-start text-xl">{brand}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm border-0 mt-3 rounded bg-orange-600 text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
