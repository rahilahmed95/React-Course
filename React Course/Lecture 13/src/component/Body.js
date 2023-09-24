import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useonline";
import UserContext from "../utils/UserContext.js";

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

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    searchCountry(setAllCountries, setFilteredCountry);
  }, []);

  return (
    <>
      {isOnline ? (
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-evenly items-center mb-10">
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  placeholder="Change Username"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="h-8 p-4 border-2 border-slate-300 focus:outline-none focus:border-cyan-600 focus:ring-sky-500"
                  name="username"
                />
              </div>

              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  placeholder="Change Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="h-8 p-4 border-2 border-slate-300 focus:outline-none focus:border-cyan-600 focus:ring-sky-500"
                  name="email"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search for a Country..."
                onChange={(e) => setSearchInput(e.target.value)}
                className="h-8 w-1/3 p-4 rounded-l-xl border-y-2 border-l-2 border border-slate-300 focus:outline-none focus:border-cyan-600 focus:ring-sky-500 border-r-0"
              />
              <button
                className="h-9 px-3 bg-cyan-600 rounded-r-xl text-white"
                onClick={() =>
                  setFilteredCountry(filterData(searchInput, allCountries))
                }
              >
                Search
              </button>
            </div>

            <div className="flex justify-center items-start flex-wrap mt-10">
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
