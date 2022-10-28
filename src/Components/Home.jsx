import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero h-screen md:px-24 lg:px-8 flex flex-col justify-center w-full">
      {/* <div className="overlay w-full h-screen">
        <img src="../Assects/images/hero_overlay_5.png" alt="" />
      </div> */}
      <div>
        <p className="text-lg font-semibold text-white capitalize mb-9">
          Enjoying with Acadu best learning platform
        </p>
        <h1 className="text-4xl font-bold text-white capitalize">
          Find your best career & get
        </h1>
        <h1 className="text-4xl font-bold text-white capitalize mb-8">
          opportunity for your future.
        </h1>
        <p className="text-xl font-semibold text-white mb-9">
          World class learning for anyone, anywhere for Increasing Knowledge.
          Let your creativity shine and start bighting your future today and
          impress your audiences.
        </p>
        <Link to={"./courses"}>
          <button className="bg-[#0D5EF4] px-5 py-3 rounded-md  text-md font-semibold text-white uppercase ">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
