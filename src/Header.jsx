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
          <button className="header-btn">Explore</button>
          <button className="header-btn">Dashboard</button>
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