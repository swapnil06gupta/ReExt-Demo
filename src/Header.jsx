import "../public/header.css";
import logo from "../public/growth.png";
import ReExt from "@sencha/reext";
// import About from "./about";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Header = () => {
  const [cryptos, setCryptos] = useState([])

  const getApi = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
      );
      const data = await response.json();
      const filteredData = data.map((coin) => ({
        name: coin.name,
        image: coin.image,
        price: coin.current_price,
        symbol: coin.symbol.toUpperCase(),
      }));
      setCryptos(filteredData);
      console.log("API Response:", filteredData);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    getApi();
    const interval = setInterval(getApi, 100000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Site Icon" className="header-icon" />
          <span className="header-title">Trad</span>
          <div className="">
            <button className="header-btn">Explore</button>
            <button className="header-btn">Dashboard</button>
          </div>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search Coins..." className="search-bar" />
        </div>
        <div className="header-right">
          <button className="btn login-btn">Login</button>
        </div>
        <div className="header-right">
          <button className="btn login-btn">Login</button>
        </div>
        <div className="header-right">
          <button className="btn login-btn">Login</button>
        </div>
      </header>
      <header className="sub-header">
        <ReExt
          xtype="tabpanel"
          style={{ width: "100%", height: "1000px" }}
          cls="custom-tab-panel"
          config={{
            tabBar: {
              style: {
                marginLeft: "25px",
                backgroundColor: "transparent",
                height: "53px",
                boxShadow: "0 6px 5px rgba(0, 0, 0, 0.1)"
              }
            },
          }}
          activeTab="0"
        >
          <ReExt
            xtype="container"
            itemId="tab1"
            title="Chart"
            iconCls="x-fa fa-home"
          >
            <Cards cryptos={cryptos} />
          </ReExt>
          <ReExt xtype="container" title="Tab 2" itemId="tab2" iconCls="x-fa fa-cogs">
            {/* <About /> */}
            <div>dfufjkdkj</div>
          </ReExt>
        </ReExt>
      </header >
    </>
  );
};
export default Header;
