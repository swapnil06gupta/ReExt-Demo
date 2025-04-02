import ReExt from "@sencha/reext";
// import { useEffect } from "react";
import "./table.css";

const Table = ({ data }) => {
  return (
    <>
      <div style={{
        color: "#eeeeee",
        fontSize: "1.75rem",
        margin: "30px 0px 30px 20px"
      }}>User Table</div>
      <ReExt
        xtype="grid"
        style={{ height: "50vh", margin: "20px 20px", backgroundColor: "#5a6f7c", color: "#5a6f7c" }}
        config={{
          // title: "All List",
          columns: [
            {
              text: "Name",
              dataIndex: "name",
              flex: 1,
              renderer: (value, metaData, data) => {
                const symbol = data.get('symbol');
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
                if (typeof value !== 'string') value = String(value);
                const color = value.includes("-") ? "#e74c3c" : "#27ae60";

                return `<div style="font-size: 15px; font-weight: 600; color: ${color};">${value}%</div>`;
              },
            },
            { text: "Volume", dataIndex: "total_volume", flex: 1, },
            {
              text: "24h Price",
              dataIndex: "high_24h",
              flex: 1,
              renderer: (value, metaData, data) => {
                const low_24h = data.get('low_24h');
                return `<div style="font-size: 15px; font-weight: 600;">High:${value}</div>
                <span style="font-size: 10px; color: #eeeeee80;">Low:${low_24h}</span>`;
              },
            },
          ],
          store: {
            data: data,
            proxy: {
              type: 'memory',
              reader: {
                type: 'json',
              },
            },
          },
          tbar: [
            {
              xtype: 'textfield',
              emptyText: 'Search by name...',
              width: 200,
              listeners: {
                change: (field, newValue) => {
                  const grid = field.up('grid');
                  const store = grid.getStore();
                  if (newValue) {
                    store.filterBy((record) => {
                      const name = record.get('name').toLowerCase();
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
