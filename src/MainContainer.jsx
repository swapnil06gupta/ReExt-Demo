import { useEffect, useState } from "react";
import Cards from "./Cards";
import ReExt from "@sencha/reext";

const MainContainer = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [isLoading, setIsLoading] = useState({
    trending: true,
    gainers: true,
    losers: true
  });
  const [error, setError] = useState(null);

  const loadTrendingData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (!response.ok) throw new Error("Failed to fetch trending data");
      const data = await response.json();
      const filteredData = data.coins.map((coin) => ({
        name: coin.item.name,
        image: coin.item.thumb,
        price: coin.item.data.price,
        symbol: coin.item.symbol.toUpperCase(),
        change: coin.item.data.price_change_percentage_24h
      }));
      setTrendingData(filteredData);
    } catch (error) {
      console.error("Error fetching trending data:", error);
      setError(error.message);
    } finally {
      setIsLoading(prev => ({ ...prev, trending: false }));
    }
  };

  const loadTopGainersAndLosers = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      );
      if (!response.ok) throw new Error("Failed to fetch market data");
      const data = await response.json();

      const sortedCoins = [...data].sort((a, b) =>
        b.price_change_percentage_24h - a.price_change_percentage_24h
      );

      const topGainersData = sortedCoins
        .filter(coin => coin.price_change_percentage_24h > 0)
        .slice(0, 10)
        .map(coin => ({
          name: coin.name,
          image: coin.image,
          price: coin.current_price,
          symbol: coin.symbol.toUpperCase(),
          change: coin.price_change_percentage_24h
        }));

      const topLosersData = sortedCoins
        .filter(coin => coin.price_change_percentage_24h < 0)
        .slice(0, 10)
        .map(coin => ({
          name: coin.name,
          image: coin.image,
          price: coin.current_price,
          symbol: coin.symbol.toUpperCase(),
          change: coin.price_change_percentage_24h
        }));

      setTopGainers(topGainersData);
      setTopLosers(topLosersData);
    } catch (error) {
      console.error("Error fetching market data:", error);
      setError(error.message);
    } finally {
      setIsLoading(prev => ({ ...prev, gainers: false, losers: false }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        loadTrendingData(),
        loadTopGainersAndLosers()
      ]);
    };
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Top Trending",
      data: trendingData.map(item => ({
        ...item,
        price: formatPrice(item.price)
      })),
      loading: isLoading.trending
    },
    {
      id: "tab2",
      title: "Top Gainers",
      data: topGainers.map(item => ({
        ...item,
        price: formatPrice(item.price)
      })),
      loading: isLoading.gainers
    },
    {
      id: "tab3",
      title: "Top Losers",
      data: topLosers.map(item => ({
        ...item,
        price: formatPrice(item.price)
      })),
      loading: isLoading.losers
    }
  ];


  return (<section className="sub-header">
    {error ? (
      <div className="error-message">
        Error loading data: {error}
      </div>
    ) : (
      <ReExt
        xtype="tabpanel"
        style={{ width: "100%", minHeight: "500px" }}
        cls="custom-tab-panel"
        config={{
          activeTab: 0,
          tabBar: {
            style: {
              marginLeft: "25px",
              backgroundColor: "transparent",
              height: "53px",
              boxShadow: "0 6px 5px rgba(0, 0, 0, 0.1)"
            }
          }
        }}
      >
        {tabs.map((tab) => (
          <ReExt
            xtype="container"
            title={tab.title}
            itemId={tab.id}
            key={tab.id}
          >
            {tab.loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              <Cards data={tab.data} />
            )}
          </ReExt>
        ))}
      </ReExt>
    )}
  </section>)
}

export default MainContainer;