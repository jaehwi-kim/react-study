import React, { forwardRef } from "react";
import "../../styles/colors.css";
import __WEBPACK_EXTERNAL_MODULE__0__ from "react-map-interaction";

const Module = forwardRef(
  ({ stringIndex, index, setSn, mSerialNo, checked, data }, ref) => {
    return (
      <div
        className="card shadow m-lg-2 text-center"
        style={{
          display: "block",
          backgroundColor: data
            ? "var(--lev" +
              (data[0].modulewatt >= 50
                ? 9
                : parseInt(data[0].modulewatt / 5)) +
              ")"
            : "white",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.28) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.28) 2px, transparent 2px)",
          backgroundSize: "20px 20px, 20px 20px",
          backgroundPosition: "-2px -2px, -2px -2px",
          fontWeight: "500",
        }}
        onClick={() => setSn(mSerialNo)}
      >
        <div
          className={"card-body " + (checked && " selected")}
          tabIndex={[stringIndex * 30 + index + 1]}
          style={{ minWidth: "87px" }}
        >
          M{index + 1}
          <br />
          {data && data[0].modulewatt}W
          <br />
          {data && data[0].modulevoltage}V
          <br />
          {data && data[0].moduletemperature}℃
        </div>
      </div>
    );
  }
);

export default Module;
