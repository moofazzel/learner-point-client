// import React, { useContext } from "react";

import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/AuthProvider";

const Register = () => {
  // const { userRegister, updateUserProfile, verifyEmail } =
  //   useContext(AuthContext);
  const { userLogin, UpdateNamePhotoURL } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.pass.value;
    console.log(fullName, email, photoURL, password);

    UpdateNamePhotoURL()

    //   function for user create
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow mx-auto mt-12 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-900 sm:text-2xl">
        Create a new account
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <Link
          to={"/login"}
          className="text-sm text-blue-500 underline hover:text-blue-700 ml-1"
        >
          Login
        </Link>
      </span>
      <div className="p-6 mt-5">
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="text"
                id="fullName"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0D5EF4] focus:border-transparent"
                placeholder=" Full Name"
                name="fullName"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="email"
                id="email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0D5EF4] focus:border-transparent"
                name="email"
                placeholder=" Email"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="URL"
                id="password"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0D5EF4] focus:border-transparent"
                placeholder="Photo URL"
                name="photoURL"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="password"
                id="pass"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0D5EF4] focus:border-transparent"
                placeholder=" Password"
                name="pass"
              />
            </div>
          </div>

          <div className="flex w-full my-4">
            <button
              type="submit"
              className="py-2 px-4  bg-[#0D5EF4] hover:bg-[#0543b8] focus:ring-[#0D5EF4] focus:ring-offset-[#0D5EF4] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
