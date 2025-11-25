import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SharedHeading from "../Components/SharedHeading";
import { Link } from "react-router";

function CountryDetails() {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetch("/countries.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setCountryDetails(found);
      });
  }, [id]);

  if (!countryDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Loading country details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto py-10 rounded-xl bg-blue-50">
      <div>
        <SharedHeading
          title="Our Popular Countries"
          description="Visa Consulting Offers a Range of Services and Expertise to help Businesses."
        />
      </div>
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={countryDetails.image}
          alt={countryDetails.country}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">
                  Visa Services Available
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-4">
                {countryDetails.country}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
                Your Gateway to {countryDetails.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Navigation Tabs */}
              <nav className="space-y-2">
                {["overview", "cities", "requirements", "visas"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {tab === "overview" && "Overview"}
                    {tab === "cities" && "Popular Cities"}
                    {tab === "requirements" && "Requirements"}
                    {tab === "visas" && "Visa Types"}
                  </button>
                ))}
              </nav>

              {/* Quick Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">⏱</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Processing Time</p>
                      <p className="font-semibold text-gray-900">
                        {countryDetails.processing_time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">💰</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Visa Fee Range</p>
                      <p className="font-semibold text-gray-900">
                        {countryDetails.visa_fee_range}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/contact">
                <button className="w-full mt-6 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Visa Application
                </button>
              </Link>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Country Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {countryDetails.full_description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">
                      {countryDetails.visas.length}
                    </div>
                    <div className="text-sm text-gray-600">Visa Types</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">
                      {countryDetails.popular_cities.length}
                    </div>
                    <div className="text-sm text-gray-600">Popular Cities</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">
                      {countryDetails.requirements.length}
                    </div>
                    <div className="text-sm text-gray-600">
                      Key Requirements
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            )}

            {/* Cities Tab */}
            {activeTab === "cities" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Popular Cities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countryDetails.popular_cities.map((city, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                          <span className="text-blue-600 text-lg">🏙</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {city}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements Tab */}
            {activeTab === "requirements" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Visa Requirements
                </h2>
                <div className="space-y-4">
                  {countryDetails.requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
                    >
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visas Tab */}
            {activeTab === "visas" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Available Visa Types
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {countryDetails.visas.map((visa, index) => (
                    <div
                      key={visa.visa_id}
                      className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {visa.visa_type}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Comprehensive {visa.visa_type.toLowerCase()} visa
                        services with expert guidance.
                      </p>
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center space-x-2">
                        <span>Apply Now</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 mt-16">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Journey to {countryDetails.country}?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts handle your visa process with care and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download Checklist
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CountryDetails;
