import React from 'react'

const BannarItems = ({slide}) => {
    const {image,prev,id,next} = slide;
  return (
    <div>
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="carousel-img">
            <img src={image} className="w-full" alt="" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/3">
            <h1 className="text-white font-bold text-6xl">
              Affordable <br /> Luxury Car <br /> For Rent
            </h1>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 w-3/4 text-center mx-auto right-5 top-1/2">
            <p className="text-white text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              odio quidem tenetur doloremque excepturi ipsam tempore explicabo
              impedit minus atque.
            </p>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 w-5/6 text-center mx-auto right-5 top-2/3">
            <button className="btn btn-outline btn-secondary mr-5">
              Button
            </button>
            <button className="btn btn-active btn-ghost">Button</button>
          </div>

          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle  mr-6">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    </div>
  )
}

export default BannarItems