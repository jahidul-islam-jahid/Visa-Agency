import React from "react";
import { BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Service from "../Services/Service";

function Home() {
  return (
    <div>
      <section className="flex items-center ">
        <div className="container mx-auto rounded-xl px-4 sm:px-6 lg:px-0 bg-blue-50  border-b-4 border-white">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left px-4 sm:px-6 lg:pl-4 py-5">
              <h1 className="text-2xl font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
                Your Trusted Partner for{" "}
                <span className="text-blue-600 block lg:inline-block animate-fade-in-up delay-200">
                  Global Visa Services
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-8 max-w-full sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
                Hassle-free visa processing for Tourist, Student, Work, and
                Family visas worldwide. Expert guidance and seamless processing
                for your international travel needs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up delay-400">
                <button className="bg-blue-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Apply Now
                </button>
                <button className="bg-white text-blue-600 border border-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 text-gray-700 text-lg animate-fade-in-up delay-500">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="text-blue-600 text-xl">
                    <GrSecure />
                  </span>{" "}
                  Fast & Secure
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <span className="text-blue-600 text-xl">
                    <VscWorkspaceTrusted />
                  </span>{" "}
                  100% Verified & Trusted
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <span className="text-blue-600 text-xl">
                    <BiSupport />
                  </span>{" "}
                  Global Support
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center animate-fade-in">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
                <img
                  src="/image/hero3.png"
                  alt="Professional visa services illustration showing global travel and documentation"
                  className="w-full h-auto "
                  loading="eager"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlOGVmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlZpc2EgU2VydmljZXMgSWxsdXN0cmF0aW9uPC90ZXh0Pjwvc3ZnPg==";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service></Service>
    </div>
  );
}

export default Home;
