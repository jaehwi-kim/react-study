import React, { useEffect, useState } from "react";
import EnergyCard from "./EnergyCard";
import "../../styles/common.css";
import axios from "axios";

const EnergyCards = ({ gatewayId }) => {
  const [curDate, setcurDate] = useState(new Date(1582988400000));
  const [currentPower, setCurrentPower] = useState(null);
  const [energyToday, setEnergyToday] = useState(null);
  const [energyMonth, setEnergyMonth] = useState(null);
  const [energyLifeTime, setEnergyLifeTime] = useState(null);

  useEffect(() => {
    const getCurrentPowerData = async () => {
      try {
        let url = "/api/sys/currentpower/" + gatewayId;
        const response = await axios.get(url);
        setCurrentPower(response.data.power);
      } catch (e) {
        console.log(e);
      }
    };
    const getEnergyToday = async () => {
      try {
        let off = new Date().getTimezoneOffset();
        let tempDate = String(curDate.getTime() - off * 60 * 1000);
        let url = "/api/sys/energytoday/" + gatewayId + "/" + tempDate;
        const response = await axios.get(url);
        setEnergyToday(parseInt(response.data.totalwh / 1000));
      } catch (e) {
        console.log(e);
      }
    };

    const getEnergyMonth = async () => {
      try {
        let off = new Date().getTimezoneOffset();
        let tempDate = String(curDate.getTime() - off * 60 * 1000);
        let url = "/api/sys/energymonth/" + gatewayId + "/" + tempDate;
        const response = await axios.get(url);
        setEnergyMonth(parseInt(response.data.totalwh / 1000));
      } catch (e) {
        console.log(e);
      }
    };

    const getEnergyLiftTime = async () => {
      try {
        let url = "/api/sys/energylifetime/" + gatewayId;
        const response = await axios.get(url);
        setEnergyLifeTime(parseInt(response.data.totalwh / 1000));
      } catch (e) {
        console.log(e);
      }
    };

    getCurrentPowerData();
    getEnergyToday();
    getEnergyMonth();
    getEnergyLiftTime();
  }, []);

  const cards = [
    {
      id: 0,
      name: "Current Power",
      value: currentPower != null ? currentPower : "0",
    },
    {
      id: 1,
      name: "Energy Today",
      value: energyToday != null ? energyToday : "0",
    },
    {
      id: 2,
      name: "Energy Month",
      value: energyMonth != null ? energyMonth : "0",
    },
    {
      id: 3,
      name: "Lifetime Energy",
      value: energyLifeTime != null ? energyLifeTime : "0",
    },
  ];

  return (
    <div className="d-flex justify-content-center m-5 flex-wrap">
      {cards.map((card) => (
        <EnergyCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default EnergyCards;
