import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="navbar">
      <h2>Where's In The World?</h2>
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
