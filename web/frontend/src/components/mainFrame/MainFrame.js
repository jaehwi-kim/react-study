import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/common.css";
import System from "../system/System";
import Logical from "../logical/Logical";
import Graph from "../graph/Graph";
import axios from "axios";

const MainFrame = () => {
  const [systemData, setSystemData] = useState(null);
  const [navOpen, setNavOpen] = useState(true);
  const gatewayId = "1";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/" + gatewayId);
        const jsonObj = JSON.parse(JSON.parse(response.data.information));
        setSystemData(jsonObj);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const TABS = (
    <Switch>
      <Route
        path="/system"
        render={() => <System sampleData={systemData} gatewayId={gatewayId} />}
      />
      <Route
        path="/logical"
        render={() => <Logical sampleData={systemData} gatewayId={gatewayId} />}
      />
      <Route
        path="/graph"
        render={() => <Graph sampleData={systemData} gatewayId={gatewayId} />}
      />
    </Switch>
  );

  return (
    <>
      <Header setNavOpen={setNavOpen} navOpen={navOpen} />
      <div className="d-flex">
        <Navbar
          name="John"
          location="서울특별시 중구"
          navOpen={navOpen}
        ></Navbar>
        <div style={{ flex: 1, overflow: "auto", backgroundColor: "#f8f9fc" }}>
          {systemData ? TABS : <p>No Data Found</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MainFrame;
