import React from "react";
import ReactDOM from "react-dom/client";
import { Fill, ReExtProvider } from "@sencha/reext";
// import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./about";
// import CryptoChart from "./Chart";
// import GetChartHtml from "./drag&drop";
import Header from "./Header";
// import About from "./About";


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
  debug: true,
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
            backgroundImage: `url(/background.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            margin: "0px auto"
          }}
        >
          <Header />
          <Routes>
            {/* <Route path="/about" element={<About />} />
            <Route path="/chart" element={<CryptoChart />} />
            <Route path="/drop" element={<GetChartHtml />} /> */}
            {/* <Route path="/" element={<App />} /> */}
          </Routes>
        </div>
      </Router>
    </ReExtProvider>
  </React.StrictMode>
);
