import React from "react";
import bannerIMG from "/Projects/Book-shop/src/assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className=" hero-content flex-col lg:flex-row-reverse">
      <img src={bannerIMG} alt="" />
        <div className="container px-0 lg:px-10 ">
          <h1 className="text-3xl text-center md:text-5xl lg:text-5xl font-bold lg:w-3/4 lg:text-left">Explore Our Vast Collection of Books Today!</h1>
          
          <Link  className="btn mx-16 bg-[#1ae63e] lg:mx-0 my-7 text-white font-semibold text-xl">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
