import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ topic }) => {
    const {id, details, image_url, price, title } = topic;

  return (
    <>
      <div className="relative max-w-sm bg-white rounded-lg border border-gray-200 shadow-md darkk:bg-gray-800 darkk:border-gray-700">
        <span className="absolute top-3 right-5 text-white font-semibold bg-red-500 px-3 py-1 rounded-xl">${price}</span>
        <Link to={`/course/${id}`}>
          <img className="rounded-t-lg min-h-[270px]" src={image_url} alt="" />
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 darkk:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 darkk:text-gray-400">
            {details.slice(0, 50)}...
          </p>
          <Link
            to={`/course/${id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkk:bg-blue-600 darkk:hover:bg-blue-700 darkk:focus:ring-blue-800"
          >
            Course Details 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
