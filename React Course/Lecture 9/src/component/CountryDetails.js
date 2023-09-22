import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerDetails from "./ShimmerDetails";

const CountryDetails = () => {
  const { capital } = useParams();
  const [countryData, setCountryData] = useState({});

  async function fetchData() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      const data = await response.json();
      setCountryData(data);
    } catch (err) {
      console.log("Error Occured While Fetching Api");
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData(setCountryData, capital);
  }, []);

  if (!countryData) return <ShimmerDetails />;

  return (
    <div className="country">
      <div className="country-image">
        <img src={countryData[0]?.flags?.svg} alt="country-flag" />
      </div>
      <div className="country-details">
        <p>
          <b>Common Name: </b>
          {countryData[0]?.name?.common}
        </p>
        <p>
          <b>Official Name: </b>
          {countryData[0]?.name?.official}
        </p>
        <p>
          <b>Capital: </b>
          {countryData[0]?.capital}
        </p>
        <p>
          <b>Region: </b>
          {countryData[0]?.region}
        </p>
        <p>
          <b>Population: </b>
          {countryData[0]?.population}
        </p>
        <p>
          <b>Continents :</b>
          {countryData[0]?.continents}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
