import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Aside from "./Aside";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const topics = useLoaderData();
  // const {details,image_url,price,title} = topic;
  // console.log(details);
  return (
    <div>
      <div className="course-bg-top px-4 py-10 mx-auto md:px-24 lg:px-8 z-10 mb-5">
        <h2 className="text-4xl font-bold text-white capitalize mb-8">
          <span>Courses</span>
        </h2>
      </div>

      <div className="flex gap-5 mx-10">
        <Aside></Aside>

        <div className="flex flex-wrap gap-4 justify-center">
          {topics.map((topic) => {
            return (
              <SingleCourse key={topic.id} topic={topic}></SingleCourse>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
