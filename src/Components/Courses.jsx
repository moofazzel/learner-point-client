import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Aside from "./Aside";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const topics = useLoaderData();

  return (
    <div>
      <div className="course-bg-top px-4 py-10 mx-auto md:px-24 lg:px-8 z-10 mb-5">
        <h2 className="text-4xl font-bold text-white capitalize mb-8">
          <span>Courses</span>
        </h2>
      </div>

      <div className="md:flex gap-3 mx-10 my-14">
        {/* Left side bar  */}
        <Aside topics={topics}></Aside>
        
        <SingleCourse></SingleCourse>
      </div>
    </div>
  );
};

export default Courses;
