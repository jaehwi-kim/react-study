import React from "react";
import EnergyCards from "./EnergyCards";
import SystemInfo from "./SystemInfo";
import "../../styles/common.css";

const System = (props) => {

  //console.log(props.sampleData.Gateway);
  const overview = props.sampleData.Gateway.devices[0];
  const tempKeys = Object.keys(overview).map((key) => {
    return typeof overview[key] === "object"
      ? [key + "-" + Object.keys(overview[key])[0]]
      : [key];
  });
  const tempVals = Object.values(overview).map((val) => {
    return typeof val === "object" ? [Object.values(val)[0]] : [val];
  });
  const tk = tempKeys.filter((key) => !key[0].includes("Ts"));
  const tempData = Object.assign(
    {},
    ...tk.map((n, index) => ({ [n]: tempVals[index] }))
  );
  return (
    <div
      style={{
        top: 0,
        bottom: 0,
        height: "10%",
        margin: "5% auto",
      }}
    >
      <div className="w-100 row d-flex justify-content-center flex-column align-items-center">
        <SystemInfo sysData={tempData}></SystemInfo>
        <EnergyCards gatewayId={props.gatewayId}></EnergyCards>
      </div>
    </div>
  );
};

export default System;
