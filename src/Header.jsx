import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="header-left">
        <img src={'growth.png'} alt="Site Icon" className="header-icon" />
        <span className="header-title">CryptoInsights</span>
        <div className="">
          <Link to="/">
            <button className="header-btn">Explore</button>
          </Link>
          <Link to="/dashboard">
            <button className="header-btn">Dashboard</button>
          </Link>
        </div>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="Search Coins..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>

  );
};

export default Header;