import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const courses = useLoaderData();
  // console.log(courses);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {courses.map((course) => {
        const { id, details, image_url, price, title } = course;
        return (
          <div className="relative max-w-xs bg-white rounded-lg border border-gray-200 shadow-md darkk:bg-gray-800 darkk:border-gray-700">
            <span className="absolute top-3 right-5 text-white font-semibold bg-red-500 px-3 py-1 rounded-xl">
              ${price}
            </span>

            <Link to={`/course/${id}`}>
              <img
                className="rounded-t-lg min-h-[270px]"
                src={image_url}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 darkk:text-white">
                  {title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 darkk:text-gray-400"></p>
              <Link
                to={`/course/${id}`}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkk:bg-blue-600 darkk:hover:bg-blue-700 darkk:focus:ring-blue-800"
              >
                Course Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCourse;
