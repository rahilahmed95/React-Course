import ProductCard from "./ProductCard";
import { restrauntList } from "../config";
import { useState } from "react";

function filterData(searchInput, restraunts) {
  return restraunts.filter((restraunt) => {
    return restraunt.info.name.includes(searchInput);
  });
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restraunts, setRestraunts] = useState(restrauntList);

  return (
    <div className="body">
      <h2>Top restaurant chains in Mumbai</h2>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => setRestraunts(filterData(searchInput, restrauntList))}
        >
          Search
        </button>
      </div>
      <div className="Products">
        {restraunts.map((restraunt) => (
          <ProductCard {...restraunt.info} key={restraunt.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
