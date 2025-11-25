import React, { useEffect, useState } from "react";
import SharedHeading from "../Components/SharedHeading";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router";

function Service() {
  const [Services, setServices] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(0);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("categoryService.json")
      .then((res) => res.json())
      .then((data) => setServiceCategories(data));
  }, []);

  const filteredService =
    showCategories != 0
      ? Services.filter((item) => item.category_id === showCategories)
      : Services;

  return (
    <div className="container mx-auto rounded-xl bg-blue-50 py-10 ">
      <div className="px-4 sm:px-6 lg:px-0">
        <SharedHeading
          title="Our Service"
          description="Comprehensive Visa Consulting Services Tailled to Your Unique Journey for Hassle-Free Global Travel"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-5 py-10 flex-wrap">
        {/* All Button */}
        <button
          onClick={() => setShowCategories(0)}
          className={`border border-blue-500 px-5 py-2 rounded-full transition-all duration-300 
            ${
              showCategories === null
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
        >
          All
        </button>

        {serviceCategories.map((item) => (
          <button
            key={item.id}
            onClick={() => setShowCategories(item.id)}
            className={`border border-blue-500 px-5 py-2 rounded-full transition-all duration-300 
              ${
                showCategories === item.category_id
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {item.visa_type}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-4">
        {filteredService.map((service, index) => {
          const Icon = FaIcons[service.icon];
          return (
            <div
              key={service.id || index}
              className="rounded-xl border border-blue-200 bg-white p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {Icon && (
                  <div className="mb-5 p-6 rounded-full bg-blue-600">
                    <Icon className="text-4xl lg:text-5xl text-white" />
                  </div>
                )}

                <h1 className="text-xl lg:text-2xl font-bold text-blue-600 mb-3">
                  {service.visa_type}
                </h1>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  to={`/service/${service.id}`}
                  className="border border-blue-500 cursor-pointer text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {service.button_text}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
