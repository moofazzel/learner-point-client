import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RightSideBar from "./RightSideBar";

const SinglePage = () => {

  const handlePdfDownload = () => {
    
  }

  const {
    title,
    details,
    author_img,
    author_name,
    students,
    love,
    lesson,
    image_url,
    id
    } = useLoaderData();
    console.log(title);
  return (
    <div className="container py-16 mx-auto lg:flex gap-10">
      <div className="bg-white-200 px-10 pb-8 rounded-lg">
        <h2 className="text-5xl font-bold text-slate-600 mt-5">{title} </h2>
        <hr className="my-16" />
        <div className="flex flex-wrap items-center justify-between gap-4 my-2">
          <div className="flex gap-5">
            <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
            <div className="">
              <span className="block text-xl font-semibold text-slate-600">
                Created by{" "}
              </span>{" "}
              <span className="block text-xl font-bold text-slate-700">
                {author_name}
              </span>{" "}
            </div>
          </div>
          <div className="text-2xl text-slate-500 font-bold">
            Students {students}
          </div>
          <div className="text-2xl text-slate-500 font-bold">View {love}</div>
          <div>
            <Link
              onClick={handlePdfDownload}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkk:bg-blue-600 darkk:hover:bg-blue-700 darkk:focus:ring-blue-800"
            >
              Download Course Outline
            </Link>
          </div>
        </div>

        <hr className="my-16" />
        <div>
          <h3 className="text-3xl text-slate-500 font-bold mb-5">
            Description
          </h3>
          <p className="text-lg text-justify">{details} </p>
        </div>
      </div>
      <div className="bg-white-200 px-10 pb-8 rounded-lg">
        <RightSideBar image_url={image_url} title={title} id={id} />
      </div>
    </div>
  );
};

export default SinglePage;
