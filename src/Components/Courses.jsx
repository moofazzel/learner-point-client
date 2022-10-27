import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Aside from "./Aside";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const topics = useLoaderData();
  const t = '4'
  return (
    <div>
      <div className="course-bg-top px-4 py-10 mx-auto md:px-24 lg:px-8 z-10 mb-5">
        <h2 className="text-4xl font-bold text-white capitalize mb-8">
          <span>Courses</span>
        </h2>
      </div>

      <div className="flex gap-5 mx-10  my-14">
        {/* <Aside topics={topics}></Aside> */}
        <aside className="w-64" aria-label="Sidebar ">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded darkk:bg-gray-800 ">
        <ul className="space-y-2">
          <li>
            <Link
              to={`../category/5`}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg darkk:text-white hover:bg-gray-100 darkk:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 darkk:text-gray-400 group-hover:text-gray-900 darkk:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </aside>

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
