import React from "react";
import ReactDOM from "react-dom/client";
import { Fill, ReExtProvider } from "@sencha/reext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import MainContainer from "./MainContainer";
import "./index.css"
import Table from "./AllCoinTable";
import "./index.css";
import CryptoChart from "./Chart";


Fill();
var reactroot = ReactDOM.createRoot(document.getElementById("root"));
var ReExtData = {
  sdkversion: "7.8.0",
  toolkit: "classic",
  theme: "",
  packages: {
    charts: true,
    fontawesome: true,
    ux: false,
    calendar: false,
    d3: false,
    exporter: false,
    pivot: false,
    pivotd3: false,
    pivotlocale: false,
    froalaeditor: false,
  },
  rtl: false,
  locale: "en",
  debug: false,
  urlbase: "./",
  location: "remote",
  overrides: false,
};
reactroot.render(
  <ReExtProvider
    ReExtData={ReExtData}
    reextkey={
      "c0JhLWV2bnJzQXdvVFRrMEhMRG1VT0xLa1RuTC1uakhtX1g1b284VmJKdC45WkROM1FqTjJVRE4zRWpPaUFIZWxKQ0xpSVRiak5UZTY1bVo1ZzNZelpEZW9kVE40QkhjckpXY3FGRE1mUldhc0ppT2lJV2R6SnllLjlKaU4xSXpVSUppT2ljR2JoSnll"
    }
    splash={true}
    style={{ overflow: "auto" }}
  >
    <Router style={{ overflow: "auto" }}>
      <div
        style={{
          minHeight: "100vh",
          margin: "0px auto"
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/dashboard" element={<Table />} />
          <Route path="/chart/:id" element={<CryptoChart />} />
        </Routes>
      </div>
    </Router>
  </ReExtProvider>
);
