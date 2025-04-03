import ReExt from "@sencha/reext";
import "./table.css";
import React, { useEffect, useState } from "react";
import { fetchMarketData } from "./Api";

const Table = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadTableData = async () => {
    try {
      const fetchData = await fetchMarketData();
      setData(fetchData);
    } catch (error) {
      console.error("Error fetching All data:", error);
      setError(error.message);
    } finally {
      setIsLoading((prev) => (false));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadTableData()
    };
    fetchData();
  }, []);

  return (
    <>
      <ReExt
        xtype="grid"
        style={{
          height: "65vh",
          maxWidth: "1200px",
          margin: "0 auto",
          color: "#5a6f7c",
          position: "relative",
          top: "60px",
        }}
        config={{
          // title: "All List",
          columns: [
            {
              text: "Name",
              dataIndex: "name",
              flex: 1,
              renderer: (value, metaData, data) => {
                const symbol = data.get("symbol");
                return `<div style="font-size: 16px; font-weight: bold;">${symbol.toUpperCase()}</div>
                <span style="font-size: 10px; color: #eeeeee80;">${value}</span>`;
              },
            },
            {
              text: "Currect Price",
              dataIndex: "current_price",
              flex: 1,
              renderer: (value) => {
                return `<div style="font-size: 15px; font-weight: 600;">$${value}</div>`;
              },
            },
            {
              text: "24h Change",
              dataIndex: "price_change_percentage_24h",
              flex: 1,
              renderer: (value) => {
                if (typeof value !== "string") value = String(value);
                const color = value.includes("-") ? "#e74c3c" : "#27ae60";

                return `<div style="font-size: 15px; font-weight: 600; color: ${color};">${value}%</div>`;
              },
            },
            { text: "Volume", dataIndex: "total_volume", flex: 1 },
            {
              text: "24h Price",
              dataIndex: "high_24h",
              flex: 1,
              renderer: (value, metaData, data) => {
                const low_24h = data.get("low_24h");
                return `<div style="font-size: 15px; font-weight: 600;">High:${value}</div>
                <span style="font-size: 10px; color: #eeeeee80;">Low:${low_24h}</span>`;
              },
            },
          ],
          store: {
            data: data,
            proxy: {
              type: "memory",
              reader: {
                type: "json",
              },
            },
          },
          tbar: [
            {
              xtype: "textfield",
              emptyText: "Search by name...",
              width: 200,
              listeners: {
                change: (field, newValue) => {
                  const grid = field.up("grid");
                  const store = grid.getStore();
                  if (newValue) {
                    store.filterBy((record) => {
                      const name = record.get("name").toLowerCase();
                      return name.includes(newValue.toLowerCase());
                    });
                  } else {
                    store.clearFilter();
                  }
                },
              },
            },
          ],
        }}
        onSelect={(grid, selected) => {
          const selectedRow = selected[0]?.data;
          if (selectedRow) {
            console.log("Selected user:", selectedRow);
          }
        }}
      />
    </>
  );
};
export default Table;
