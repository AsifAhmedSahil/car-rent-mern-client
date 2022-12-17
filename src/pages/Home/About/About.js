import React from "react";
import audi from "../../../assets/bannar/auto-gd88b67780_1920.jpg";
import bently from "../../../assets/bannar/car-g74d203ab4_1920.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-[700px] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full relative ">
          <img
            src={audi} alt="" 
            className="w-4/5 h-full rounded-lg shadow-2xl border-8"
          />
          <img
            src={bently} alt="" 
            className="absolute w-3/6 top-2/3 right-5 rounded-lg shadow-2xl border-8"
          />
          
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl text-orange-600 font-semibold mb-5 mt-6 lg:mt-0 underline animate-bounce">About Us</h2>
            <h1 className="my-4 lg:text-5xl text-2xl font-bold">We are Trustable <br /> and affordable <br />in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6 hidden lg:block md:block">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-orange-600 text-white border-0 rounded animate-pulse">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
