import React, { useState, useEffect } from 'react';
import ReExt from '@sencha/reext'; // Importing the Chart component from ReExt
// import { Cards } from './Cards';

// Sample cryptocurrency data
const cryptoData = [
  { time: '2023-03-01', price: 50000 },
  { time: '2023-03-01', price: 50000 },
  { time: '2023-03-02', price: 52000 },
  { time: '2023-03-03', price: 51000 },
  { time: '2023-03-04', price: 53000 },
  { time: '2023-03-05', price: 54000 },
  { time: '2023-03-06', price: 56000 },
  { time: '2023-03-07', price: 55000 },
];

const CryptoChart = () => {
  const [data, setData] = useState(cryptoData);

  useEffect(() => {
    // Optionally, you can fetch live data here using `fetch` or `axios`.
    const intervalId = setInterval(() => {
      setData(cryptoData); // Simulating live data update
    }, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId); // Cleanup when the component unmounts
  }, []);


  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <Cards /> */}

      </div>
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h2>Cryptocurrency Price Chart (Line Chart)</h2>

        <ReExt
          xtype="cartesian" // Cartesian chart type
          config={{     // Set the height
            width: "100%",     // Full width
            height: 600,
            store: {
              data: data, // Provide data to the chart
            },
            theme: "blue",
            axes: [
              {
                type: 'category', // X-axis is based on categories (time)
                position: 'bottom',
                fields: ['time'],
                title: 'Date',
              },
              {
                type: 'numeric',  // Y-axis is numeric (price)
                position: 'left',
                fields: ['price'],
                title: 'Price (USD)',
              },
            ],
            series:
              [{
                type: 'line', // Set the chart type to 'line'
                xField: 'time', // Time data for the x-axis
                yField: 'price', // Price data for the y-axis
                title: 'Bitcoin Price',
                style: {
                  stroke: '#32CD32', // Line color
                  lineWidth: 2,      // Line width
                },
                marker: {
                  type: 'circle', // Marker for each data point
                  size: 4,
                  stroke: '#32CD32',
                  fill: '#fff',
                },
                highlight: true, // Enable data point highlighting
                tooltip: {
                  trackMouse: true, // Tooltip follows the mouse
                  renderer: (tooltip, record) => {
                    // Customize the tooltip content
                    const time = record.get("time");
                    const price = record.get("price");
                    tooltip.setHtml(`Date: ${time}<br>Price: $${price}`);
                  },
                },
              }]
          }}
        />
      </div>
    </>
  );
};

export default CryptoChart;
