import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex justify-between items-center h-20 p-3 bg-[#f8f8ff] shadow-md mb-10">
      <h2 className="font-bold text-2xl text-slate-600 select-none cursor-pointer">
        Adventure Awaits
      </h2>
      <ul className="flex">
        <li className="px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-5">
          <Link to="/bookFlight">Book</Link>
        </li>
      </ul>
      <div>
        {isDarkMode ? (
          <button
            className="flex gap-3 py-1 px-2 cursor-pointer items-center"
            onClick={() => setIsDarkMode(false)}
          >
            <BsFillMoonFill />
            <p>Dark Mode</p>
          </button>
        ) : (
          <button
            className="flex gap-3 py-1 px-2 cursor-pointer items-center"
            onClick={() => setIsDarkMode(true)}
          >
            <BsMoon />
            <p>Dark Mode</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
