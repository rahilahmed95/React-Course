import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useonline";

async function searchCountry(setAllCountries, setFilteredCountry) {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setAllCountries(data);
    setFilteredCountry(data);
  } catch (err) {
    console.log("Error Occured While Fetching data through API");
    console.log(err);
  }
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);

  const isOnline = useOnline();

  useEffect(() => {
    searchCountry(setAllCountries, setFilteredCountry);
  }, []);

  return (
    <>
      {isOnline ? (
        <div className="body">
          <div>
            <input
              type="text"
              placeholder="Search for a Country..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="Search-bar"
            />
            <button
              className="search-button"
              onClick={() =>
                setFilteredCountry(filterData(searchInput, allCountries))
              }
            >
              Search
            </button>
          </div>

          <div className="Products">
            {allCountries.length === 0 ? (
              <Shimmer />
            ) : (
              filteredCountry.map((country, index) => (
                <Link to={`/country/${country.capital}`} key={index}>
                  <ProductCard {...country} />
                </Link>
              ))
            )}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center", margin: "100px 0" }}>
          Check your Internet Connection
        </h1>
      )}
    </>
  );
};

export default Body;
