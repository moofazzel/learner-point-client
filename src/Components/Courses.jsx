import React from "react";
import { Link } from "react-router-dom";
import Aside from "./Aside";

const Courses = () => {
  return (
    <div>
      <div className="course-bg-top px-4 py-10 mx-auto md:px-24 lg:px-8 z-10 mb-5">
        <h2 className="text-4xl font-bold text-white capitalize mb-8">
          <span>Courses</span>
        </h2>
      </div>

      <div className="flex gap-5 mx-10">
        <Aside></Aside>

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md darkk:bg-gray-800 darkk:border-gray-700">
          <Link href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 darkk:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 darkk:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkk:bg-blue-600 darkk:hover:bg-blue-700 darkk:focus:ring-blue-800"
            >
              Get 
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
