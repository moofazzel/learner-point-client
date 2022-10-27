import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { title, price, author_img } = useLoaderData();

  return (
    <div>
      <div className="course-bg-top px-4 py-10 mx-auto md:px-24 lg:px-8 z-10 mb-5">
        <p className="text-5xl text-center font-bold text-white capitalize mb-8">
          Check Out
        </p>

        <h2 className="text-2xl text-center font-semibold text-slate-200 capitalize mb-8">
          {title}
        </h2>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="rounded-lg shadow-md xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <p className="text-xl font-semibold md:text-3xl leading-normal text-gray-800 dark:text-gray-50">
                    {title}
                  </p>
                  <p className="text-lg font-bold leading-none text-gray-600 dark:text-white">
                    ${price}
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                  <img src={author_img} alt="headphones" />
                </div>
              </div>

              <div className="rounded-lg shadow-md p-8 bg-gray-50 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                  <div>
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base leading-4">Pay</p>
                  </div>
                </button>

                <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                    or pay with card
                  </p>
                  <hr className="border w-full" />
                </div>

                <div className="mt-8">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Card details
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="0000 1234 6549 15151"
                    />
                  </div>
                  <div className="flex-row flex">
                    <input
                      className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="MM/YY"
                    />
                    <input
                      className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="CVC"
                    />
                  </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Name on card
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="Name on card"
                    />
                  </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Country or region
                </label>
                <div className="mt-2 flex-col">
                  <div className="relative ">
                    <button
                      id="changetext"
                      className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                      type="email"
                      name=""
                      id=""
                    >
                      United States
                    </button>

                    <img
                      onclick="showMenu(true)"
                      id="closeIcon"
                      className="cursor-pointer absolute top-4 right-4 dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      onclick="showMenu(true)"
                      id="openIcon"
                      className="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden transform rotate-180 dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      onclick="showMenu(true)"
                      id="closeIcon"
                      className="cursor-pointer absolute top-4 right-4 hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
                      alt="Dropdown"
                    />
                    <img
                      onclick="showMenu(true)"
                      id="openIcon"
                      className="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
                      alt="Dropdown"
                    />
                    <div
                      id="dropdown"
                      className=" hidden  z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
                    >
                      <div
                        onclick="changeText('China')"
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        China
                      </div>
                      <div
                        onclick="changeText('Russia')"
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        Russia
                      </div>
                      <div
                        onclick="changeText('UK')"
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        UK
                      </div>
                    </div>
                  </div>
                  <input
                    className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    name=""
                    id=""
                    placeholder="ZIP"
                  />
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                  <div>
                    <p className="text-base leading-4">Pay ${price} </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
