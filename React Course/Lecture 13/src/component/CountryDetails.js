import { useParams } from "react-router-dom";
import ShimmerDetails from "./ShimmerDetails";
import useCountry from "../utils/useCountry";

const CountryDetails = () => {
  const { capital } = useParams();

  const countryData = useCountry(capital);

  if (!countryData) return <ShimmerDetails />;

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <div className="flex justify-center">
        <img
          className="w-2/5"
          src={countryData[0]?.flags?.svg}
          alt="country-flag"
        />
      </div>
      <div className="text-lg pt-8 w-2/5">
        <p className="pb-5 text-center">
          <b>Common Name: </b>
          {countryData[0]?.name?.common}
        </p>
        <p className="pb-5 text-center">
          <b>Official Name: </b>
          {countryData[0]?.name?.official}
        </p>
        <p className="pb-5 text-center">
          <b>Capital: </b>
          {countryData[0]?.capital}
        </p>
        <p className="pb-5 text-center">
          <b>Region: </b>
          {countryData[0]?.region}
        </p>
        <p className="pb-5 text-center">
          <b>Population: </b>
          {countryData[0]?.population}
        </p>
        <p className="pb-5 text-center">
          <b>Continents :</b>
          {countryData[0]?.continents}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
