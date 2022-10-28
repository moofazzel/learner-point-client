import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { AuthContext } from "../UserContext/AuthProvider";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-[#0D5EF4] text-white font-semibold shadow-sm px-4 py-5 mx-auto md:px-24 lg:px-8">
      <div className=" container mx-auto relative flex justify-between items-center grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-20">
                <div className="p-5 bg-white border rounded shadow-sm z-20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    {/* Toggle Button */}
                    <div className="mt-2 lg:hidden">
                      <label
                        htmlFor="default-toggle"
                        className="inline-flex relative items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="default-toggle"
                          className="sr-only peer"
                        />
                        <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 darkk:peer-focus:ring-blue-800 rounded-full peer darkk:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all darkk:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-semibold text-gray-900 darkk:text-gray-300">
                          Dark
                        </span>
                      </label>
                    </div>
                    <ul className="flex flex-col text-black">
                      <li className="flex leading-9  ">
                        <NavLink
                          to={"home"}
                          className={({ isActive }) =>
                            isActive ? "active" : undefined
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="flex leading-9  ">
                        <NavLink to={"chart"} className="">
                          Chart
                        </NavLink>
                      </li>
                      <li className="flex leading-9  ">
                        <NavLink to={"blog"} className="">
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <Link to={"/"}>
            <img className="w-60 logo" src="" alt="" />
            <p className="text-xl">LEARNER POINT</p>
          </Link>
        </div>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li className="flex leading-9  ">
            <NavLink
              to={"courses"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Courses
            </NavLink>
          </li>
          <li className="flex leading-9  ">
            <NavLink to={"blog"} className="">
              Blog
            </NavLink>
          </li>
          <li className="flex leading-9  ">
            <NavLink to={"faq"} className="">
              FAQ
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          {user?.uid ? (
            <>
              <div className="dropdown">
                <img
                  tabIndex={0}
                  className="w-14 h-14 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <span>{user?.displayName}</span>
                  <li className="flex leading-9  ">
                    <NavLink onClick={handleLogout} className="">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ul className="flex gap-3 items-center">
              <li className="flex leading-9  ">
                <NavLink to={"login"} className="">
                  Login
                </NavLink>
              </li>
              <li className="flex leading-9  ">
                <NavLink to={"register"} className="">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}

          {/* Toggle Button */}
          <div className="mt-2 hidden lg:block">
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 darkk:peer-focus:ring-blue-800 rounded-full peer darkk:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all darkk:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-semibold text-gray-900 darkk:text-gray-300">
                Dark
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
