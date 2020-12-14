import React from "react";
import "./EnergyCard.css";
import "../../styles/common.css";
import CountUp from "react-countup";

const EnergyCard = ({ card }) => {
  const { id, name, value } = card;
  return (
    <div className="d-flex flex-column align-content-center cardDiv">
      <div className="cardName font-weight-bold text-info text-uppercase mb-1">
        {name}
      </div>
      <div className="card border-left-info shadow card-mod justify-content-center">
        <div className="font-weight-bold text-gray-800">
          <CountUp end={parseInt(value)} duration={(id + 1) / 2} />
          {name === "Current Power" ? "W" : "kWh"}
        </div>
      </div>
    </div>
  );
};

export default EnergyCard;
