import React from "react";
import ReactDOM from "react-dom/client";
import { Fill, ReExtProvider } from "@sencha/reext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import MainContainer from "./MainContainer";
import CryptoChart from "./Chart";
import "./index.css"


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
  <React.StrictMode>
    <ReExtProvider
      ReExtData={ReExtData}
      reextkey={
        "bzJOOXhIaHJzTlZMZG1wXzg3dFR6N3NlQlVNakwwMGNoRDlwUWJobFJTbS45bFRPeWN6TjJVRE4zRWpPaUFIZWxKQ0xpY0dkeFpuZDVFVFp3Qm5NejBHT29KemN0Tm5iNkpXY3FGRE1mUldhc0ppT2lJV2R6SnllLjlKaU4xSXpVSUppT2ljR2JoSnll"
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
            <Route path="/dashboard" element={<CryptoChart />} />
            {/* <Route path="/chart" element={<CryptoChart />} />
            <Route path="/drop" element={<GetChartHtml />} />
            <Route path="/" element={<App />} /> */}
          </Routes>
        </div>
      </Router>
    </ReExtProvider>
  </React.StrictMode>
);
