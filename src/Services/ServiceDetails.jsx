import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ServiceDetails() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/services.json");
        const data = await response.json();

        const foundService = data.find(
          (service) => service.id === parseInt(id)
        );
        setService(foundService);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto flex justify-center items-center py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Service not found</h2>
          <p className="mt-2 text-gray-600">
            Sorry, the service you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 bg-blue-50 rounded-xl">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
            {service.visa_type} Service
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            {service.short_description}
          </p>
          <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={service.image}
              alt={service.visa_type}
              className="w-full h-80 md:h-[400px] object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-10">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Visa Type:{" "}
              <span className="text-blue-600">{service.visa_type}</span>
            </h2>

            {/* Details Grid */}
            <div className="space-y-6">
              {/* Full Description */}
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Detailed Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.full_description}
                </p>
              </div>

              {/* Processing Time + Fee */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Processing Time
                  </h3>
                  <p className="text-gray-600">{service.processing_time}</p>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Fee
                  </h3>
                  <p className="text-3xl font-bold text-green-600">
                    ${service.fees}
                  </p>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Required Documents
                </h3>
                <ul className="list-disc ml-5 text-gray-600">
                  {service.required_documents.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Eligibility
                </h3>
                <ul className="list-disc ml-5 text-gray-600">
                  {service.eligibility.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Application Steps
                </h3>
                <ol className="list-decimal ml-5 text-gray-600 space-y-1">
                  {service.steps.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition">
                Apply Now
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
