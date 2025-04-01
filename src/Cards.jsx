import ReExt from "@sencha/reext";
import { useEffect, useRef } from "react";

const Cards = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const task = {
      run: () => {
        const container = containerRef.current?.el?.dom;
        if (container) {
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // Reset scroll when reaching end
          } else {
            container.scrollLeft += 2; // Adjust scrolling speed
          }
        }
      },
      interval: 50, // Adjust speed (lower = faster)
    };

    Ext.TaskManager.start(task);

    return () => {
      Ext.TaskManager.stop(task);
    };
  }, []);

  const renderCryptoCardItems = (crypto) => [
    {
      xtype: "container",
      html: `
      <div style="background-color: #5a6f7c; color: #eeeeee; border-radius: 15px; display: flex; align-items: center; padding: 10px; height: 80px;">
        <img src="${crypto.image}" width="40" height="40" style="vertical-align: middle;" />
        <div style="display: flex; font-size: 1rem; flex-direction: column; flex: 1">
          <span style="margin-left: 10px; font-weight: 700; padding: 5px 2px;    text-overflow: ellipsis;max-width: 150px;overflow: hidden;">${crypto.name}</span>
          <span style="margin-left: 10px; padding: 5px 2px; color: #eeeeee80">${crypto.symbol}</span>
        </div>
        <div style="display: flex; font-size: 1rem; flex-direction: column; flex: 1">
          <span style="margin-left: 10px; font-weight: 700; font-size: 1rem; align-self: flex-start; margin: 10px">$${crypto.price}</span>
        </div>
      </div>
      `,
      flex: 1,
    },
  ];

  return (
    data && Array.isArray(data) && data.length > 0 ?
      <ReExt
        xtype="container"
        ref={containerRef}
        config={{
          height: "100px",
          layout: "hbox",
          scrollable: "horizontal",
          style: {
            margin: "30px 20px",
            scrollbarWidth: "none",
            "&::WebkitScrollbar": { display: "none" },
            overflowX: "auto",
            whiteSpace: "nowrap",
          },
          items: data.map((crypto, index) => ({
            xtype: "panel",
            maxBlockSize: "max-content",
            layout: "hbox",
            margin: "0 10",
            width: 300,
            key: index,
            style: { cursor: "pointer" },
            items: renderCryptoCardItems(crypto),
          })),
        }}
      /> :
      <div style={{ color: "white" }}>No data available</div>
  )
};

export default Cards;
