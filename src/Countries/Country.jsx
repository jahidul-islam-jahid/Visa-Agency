import React, { useEffect, useState } from "react";
import SharedHeading from "../Components/SharedHeading";
import CountriesCard from "./CountriesCard";

function Country() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container mx-auto bg-blue-50 border-t-4 py-10 border-white rounded-xl">
      <div>
        <SharedHeading
          title="Our Popular Countries"
          description="Visa Consulting Offers a Range of Services and Expertise to help Businesses."
        />
      </div>
      <div className="grid grid-cols-3 gap-5 px-4 py-10">
        {Countries.map((country) => (
          <CountriesCard country={country}/>
        ))}
      </div>
    </div>
  );
}

export default Country;
