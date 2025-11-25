import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPlaneDeparture,
  FaTwitter,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="container mx-auto bg-blue-50">
      <div className=" px-4 sm:px-6 lg:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t-4 border-white ">
        {/* Logo & About */}
        <div className="space-y-4">
          <NavLink to="/" className="flex gap-2 items-center">
            <FaPlaneDeparture className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />
            <span className="font-poppins text-xl sm:text-2xl md:text-4xl font-semibold">
              Global<span className="text-blue-600">Visa</span>
            </span>
          </NavLink>
          <p className="text-sm sm:text-base text-gray-700">
            At visafast we are committed to transforming your dreams of
            international exploration into reality. Our team of seasoned Visa
            Consultants is dedicated to providing unparalleled guidance and
            support throughout your visa application.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="border w-10 h-10 p-2 rounded-full hover:bg-blue-100 bg-white border-gray-100 cursor-pointer" />
            <FaLinkedinIn className="border w-10 h-10 p-2 rounded-full hover:bg-blue-100 bg-white border-gray-100 cursor-pointer" />
            <FaTwitter className="border w-10 h-10 p-2 rounded-full hover:bg-blue-100 bg-white border-gray-100 cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">
            Explore
          </h2>
          <ul className="flex flex-col gap-2 text-gray-700">
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/service"
            >
              Service
            </NavLink>
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/country"
            >
              Countries
            </NavLink>
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/process"
            >
              Process
            </NavLink>
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="font-semibold text-gray-600 hover:text-blue-600"
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>

        {/* Visa Types */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">
            Visa
          </h2>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="cursor-pointer font-semibold text-gray-600 hover:text-blue-600">
              Work Visa
            </li>
            <li className="cursor-pointer font-semibold text-gray-600 hover:text-blue-600">
              Student Visa
            </li>
            <li className="cursor-pointer font-semibold text-gray-600 hover:text-blue-600">
              Business Visa
            </li>
            <li className="cursor-pointer font-semibold text-gray-600 hover:text-blue-600">
              Family Visa
            </li>
            <li className="cursor-pointer font-semibold text-gray-600 hover:text-blue-600">
              Travel Visa
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">
            Get in touch
          </h2>
          <p className="text-gray-700 mb-2">Feni Sadar, Feni, Bangladesh</p>
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <IoCall className="text-lg" />
            <span>+880 1690-030190</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MdEmail className="text-lg" />
            <span>j.i.jahid90@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center py-4 border-t-2 border-white text-sm sm:text-base">
        <p>
          © 2025{" "}
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/j.i.jahid900"
          >
            J.I.Jahid
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
