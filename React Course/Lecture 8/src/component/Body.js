import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, allCountries) {
  return allCountries.filter((country) =>
    country?.name?.common?.includes(searchInput)
  );
}

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

  useEffect(() => {
    searchCountry(setAllCountries, setFilteredCountry);
  }, []);

  return (
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
            <ProductCard {...country} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
