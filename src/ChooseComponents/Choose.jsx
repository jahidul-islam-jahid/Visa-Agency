import React from "react";

function Choose() {
  return (
    <div className="">
      <div className="container mx-auto  bg-blue-50 py-10 border-t-4 border-white rounded-xl">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="h-full w-full">
                <img
                  src="/image/about.png"
                  alt="Team collaboration and visa consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 p-6 lg:p-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                  We're Committed to Being Your Trusted Partner Throughout This
                  Process.
                </p>

                <div className="space-y-6 lg:space-y-8">
                  {/* Feature 1 */}
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          Personalized Approach
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          We recognize that no two visa journeys are the same.
                          That's why we take the time to understand your unique
                          circumstances and tailor our services accordingly.
                          Your needs, goals, and preferences are at the
                          forefront of everything we do.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          Proven Track Record
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          We've helped numerous individuals and businesses
                          successfully navigate the visa landscape. Our track
                          record of client success stories speaks volumes about
                          our commitment to delivering outstanding results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Call to Action */}
                <div className="mt-8 lg:mt-12">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Learn More About Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
