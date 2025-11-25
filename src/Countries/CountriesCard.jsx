import React from "react";
import { Link } from "react-router";

function CountriesCard({ country }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          src={country.image}
          alt={`${country.country} landscape`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Country Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {country.country}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Country Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
          {country.country}
        </h2>

        {/* Visa Types */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Available Visas
          </h3>
          <ul className="space-y-2 flex gap-5">
            {country.visas.map((item) => (
              <li
                key={item.visa_id}
                className="flex items-center space-x-1 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group/item"
              >
                {/* Visa Icon */}
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm ">
                  {item.visa_type}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link to={`/country/${country.id}`}>
          <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg group/btn cursor-pointer">
            <span className="flex items-center justify-center space-x-2">
              <span>{country.button_text}</span>
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}

export default CountriesCard;
