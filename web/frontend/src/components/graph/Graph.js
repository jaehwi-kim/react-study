import React, { useState, useEffect } from "react";
import List from "../logical/List";
import GraphD from "./GraphDetail";
import axios from "axios";

const Graph = (props) => {
  // gt_id of current gateway
  const [selectedGtid, setGtid] = useState(props.gatewayId);
  // st_id of selected string
  const [selectedStid, setStid] = useState(null);
  // sn of selected module
  const [selectedSn, setSn] = useState(null);
  // timeRange can be "day"/"week"/"month"
  const [timeRange, setTimeRange] = useState("day");

  const [selectedItemType, setItemType] = useState("");

  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        let url = "/api/graph/" + "gateway" + "/";
        if (selectedItemType === "gateway") {
          url += selectedGtid + "/" + timeRange;
          const response = await axios.get(url);
          setData([
            {
              name: "totalwh delta",
              data: response.data.map((d) => [
                Number(d.endts),
                d.totalwh_delta,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "watt average",
              data: response.data.map((d) => [Number(d.endts), d.watt_avg]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
          ]);
          setStid(null);
          setSn(null);
        } else if (selectedItemType === "strings") {
          url = "/api/graph/" + "strings" + "/";
          url += selectedStid + "/" + timeRange;
          const response = await axios.get(url);
          setData([
            {
              name: "totalwh",
              data: response.data.map((d) => [Number(d.endts), d.totalwh]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "totalwh delta",
              data: response.data.map((d) => [
                Number(d.endts),
                d.totalwh_delta,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "watt average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.stringwatt_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "voltage average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.stringvoltage_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "temperature average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.temperature_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
          ]);
          setGtid(null);
          setSn(null);
        } else if (selectedItemType === "modules") {
          url = "/api/graph/" + "modules" + "/";
          url += selectedSn + "/" + timeRange;
          const response = await axios.get(url);
          setData([
            {
              name: "watt average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.modulewatt_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "voltage average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.modulevoltage_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
            {
              name: "temperature average",
              data: response.data.map((d) => [
                Number(d.endts),
                d.moduletemperature_avg,
              ]),
              xcategories: response.data.map((d) => [
                new Date(Number(d.endts)).toUTCString(),
              ]),
            },
          ]);
          setGtid(null);
          setStid(null);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [selectedItemType, selectedGtid, selectedStid, selectedSn, timeRange]);

  useEffect(() => {
    setItemType("gateway");
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ marginTop: "15px", width: "100%" }}
    >
      <div className="d-flex" style={{ width: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <List
            sampleData={props}
            setGtid={setGtid}
            setStid={setStid}
            setSn={setSn}
            selectedGtid={selectedGtid}
            selectedStid={selectedStid}
            selectedSn={selectedSn}
            setData={setData}
            setItemType={setItemType}
          />
        </div>
        <div style={{ flexGrow: 2 }}>
          <GraphD
            data={data}
            selectedItemType={selectedItemType}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
