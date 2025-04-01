import ReExt from "@sencha/reext";

const Cards = ({ cryptos }) => {
  const renderCryptoCardItems = (crypto) => [
    {
      xtype: "container",
      html: `
      <div style="background-color: #5a6f7c; color: #eeeeee; border-radius: 15px; display: flex;align-items: center;padding: 10px;height: 80px"; >
        <img src="${crypto.image}" width="40" height="40" style="vertical-align: middle;" />
        <div style="display: flex; font-size:1rem; flex-direction: column; flex: 1">
          <span style="margin-left: 10px; font-weight: 700; padding: 5px 2px 5px 2px">${crypto.name}</span>
          <span style="margin-left: 10px; padding: 5px 2px 5px 2px;color: #eeeeee80">${crypto.symbol}</span>
          </div>
          <span style="margin-left: 10px; font-weight: 700; font-size:1rem; align-self: flex-start; margin: 10px">$${crypto.price}</span>
      </div>
    `,
      flex: 1,
    },
  ];

  return (
    <>
      <span
        style={{
          color: "#eeeeee",
          fontSize: "1.75rem",
          margin: "30px 0px 0px 20px"
        }}
      >
        Top Coins
      </span>
      {cryptos && Array.isArray(cryptos) && cryptos.length > 0 ? (
        <ReExt
          xtype="container"
          // flex="0.5 1 0%"
          // overflow="visible !important"
          // display="flex"
          height="100px"
          config={{
            height: "100px",
            layout: "hbox",
            scrollable: "horizontal",
            style: {
              margin: "30px 20px 20px 20px",
              scrollbarWidth: "none",
              '&::WebkitScrollbar': {
                display: "none" /* Safari and Chrome */
              }
            },
            items: cryptos.map((crypto, index) => ({
              xtype: "panel",
              maxBlockSize: "max-content",
              layout: "hbox",
              margin: "0 10",
              width: 250,
              key: index,
              style: { color: "red !important", cursor: "pointer" },
              items: renderCryptoCardItems(crypto),
            })),
          }}
        />
      ) : (
        <div style={{ color: "white" }}>No data available</div>
      )}
      <div style={{
        color: "#eeeeee",
        fontSize: "1.75rem",
        margin: "30px 0px 0px 20px"
      }}>

        <div>Top Gainers</div>
        {/* <About /> */}
      </div>
    </>
  );
};
export default Cards;
