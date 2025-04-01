import ReExt from "@sencha/reext";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function About() {
  const [row, setRow] = useState(null);
  const [direction, setDirection] = useState("row");
  const directionRef = useRef();
  directionRef.current = direction;

  return (
    <>
      sdkjkjdkjs
      <div style={{ height: '30px', display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
        <Link to="/chart">
          <ReExt xtype='button'
            style={{ width: '300px', height: '30px', marginRight: '10px' }}
            config={{ text: "Chart", width: '100%' }}
            onClick={() => {
              navigator('/chart');
            }}
          />
        </Link>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{ borderBottom: "2px solid lightgray", margin: "0 0 10px 0" }}
        >
          <ReExt
            xtype="logo"
            style={{ width: 250, border: "2px solid blue", margin: "0 0 10px 0" }}
          />
        </div>
        <div
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
          <ReExt
            xtype="button"
            style={{ width: "300px", height: "30px", marginRight: "10px" }}
            config={{ text: direction + " is current", width: "100%" }}
            onClick={() => {
              // for classic toolkit
              if (directionRef.current === "row") {
                setDirection("column");
              } else {
                setDirection("row");
              }
            }}
            onTap={() => {
              // for modern toolkit
              if (directionRef.current === "row") {
                setDirection("column");
              } else {
                setDirection("row");
              }
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: direction }}>
          <ReExt
            xtype="grid"
            style={{ width: "325px", height: "320px" }}
            config={{
              title: "grid",
              columns: [
                { text: "Name", dataIndex: "name", width: 60 },
                { text: "Email", dataIndex: "email", flex: 1 },
                { text: "Phone", dataIndex: "phone", width: 80 },
              ],
              store: {
                data: {
                  items: [
                    {
                      name: "Jean Luc",
                      email: "jeanluc@enterprise.com",
                      phone: "555-111-1111",
                    },
                    {
                      name: "Worf",
                      email: "worf@enterprise.com",
                      phone: "555-222-2222",
                    },
                    {
                      name: "Deanna",
                      email: "deanna@enterprise.com",
                      phone: "555-333-3333",
                    },
                    {
                      name: "Data",
                      email: "data@enterprise.com",
                      phone: "555-444-4444",
                    },
                  ],
                },
                proxy: {
                  type: "memory",
                  reader: {
                    type: "json",
                    rootProperty: "items",
                  },
                },
              },
            }}
            onSelect={(grid, selected) => {
              var row;
              if (selected[0] === undefined) {
                row = selected.data;
              } else {
                row = selected[0].data;
              }
              setRow(row);
            }}
          />
          <div
            style={{
              width: "300px",
              padding: "10px 10px 10px 13px",
              border: "1px solid gray",
            }}
          >
            <ReExt
              xtype="displayfield"
              style={{ border: "1px solid lightgray" }}
              config={{ value: `name: ${row === null ? "" : row.name}` }}
            />
            <ReExt
              xtype="displayfield"
              style={{ border: "1px solid lightgray" }}
              config={{ value: `email: ${row === null ? "" : row.email}` }}
            />
            <ReExt
              xtype="displayfield"
              style={{ border: "1px solid lightgray" }}
              config={{ value: `phone: ${row === null ? "" : row.phone}` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
