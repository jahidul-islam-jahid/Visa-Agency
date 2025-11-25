import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // use NavLink instead of Link

function Heading() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "Countries", path: "/country" },
    { name: "Process", path: "/process" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="">
      <div className="container mx-auto navbar bg-blue-50 border-white border-b-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex gap-2 items-center">
            <FaPlaneDeparture className="text-xl md:text-5xl text-blue-600" />
            <span className="font-poppins text-xl md:text-4xl font-semibold">
              Global<span className="text-blue-600">Visa</span>
            </span>
          </NavLink>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-5 text-lg">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <NavLink
            to="/apply"
            className= "hidden px-5 py-1 sm:block btn rounded-full bg-blue-600 text-white text-lg hover:bg-blue-700"
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Heading;
