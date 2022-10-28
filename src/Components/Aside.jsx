import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Aside = ({ topics }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://learning-platform-client-side-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const { category_id } = topics;
  // const category = useLoaderData();
  return (
    <aside aria-label="Sidebar">
      <div className="w-full md:w-[13rem] mx-auto overflow-y-auto py-4 px-3 my-10 bg-gray-50 rounded darkk:bg-gray-800 ">
        <ul className="space-y-2">
          {category.map((c) => (
            <li>
              <Link
                to={`/category/${c.id}`}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg darkk:text-white hover:bg-gray-100 darkk:hover:bg-gray-700"
              >
                <span className="ml-3">{c.name} </span>
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
