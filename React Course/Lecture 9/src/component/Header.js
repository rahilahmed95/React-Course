import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="navbar">
      <h2>Adventure Awaits</h2>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="dark-mode">
        {isDarkMode ? (
          <button onClick={() => setIsDarkMode(false)}>
            <BsFillMoonFill />
            <p>Dark Mode</p>
          </button>
        ) : (
          <button onClick={() => setIsDarkMode(true)}>
            <BsMoon />
            <p>Dark Mode</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
