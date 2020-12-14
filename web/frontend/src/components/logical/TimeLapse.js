import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Highcharts from "highcharts";
import TLChart from "./TLChart";
import { Button, ButtonGroup } from "reactstrap";

// props - timeRange selectedStid selectedSn data
const TimeLapse = (props) => {
  const [curPoint, setPoint] = useState([0, 0]);
  const [graphData, setGraphData] = useState([]);
  const [weekDates, setWeekDates] = useState([new Date()]);

  useEffect(() => {
    let tempDates = [];
    for (let i = 1; i < 8; i++) {
      tempDates.push(new Date(props.curDate - i * 86400000));
    }
    setWeekDates(tempDates);
  }, [props.curDate]);

  useEffect(() => {
    if (curPoint[0] !== 0) props.setCurTime(curPoint[0].toString());
  }, [curPoint]);

  // useRef to store previous props value for both st_id and sn
  const prevStidRef = useRef(null);
  const prevSnRef = useRef(null);
  useEffect(() => {
    prevStidRef.current = props.selectedStid;
    prevSnRef.current = props.selectedSn;
  });
  const prevStid = prevStidRef.current;
  const prevSn = prevSnRef.current;

  useEffect(() => {
    if (props.selectedGtid && !props.selectedSn && !props.selectedStid) {
      let temp = [];
      for (let i = 0; i < props.data.length; i++) {
        temp.push([Number(props.data[i].endts), props.data[i].totalwatt]);
      }
      setGraphData(temp);
    }
    // move module-module
    else if (prevStid !== props.selectedStid && prevSn === null) {
      let temp = [];
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].st_id === Number(props.selectedStid)) {
          temp.push([Number(props.data[i].endts), props.data[i].stringwatt]);
        }
      }
      setGraphData(temp);
    }
    // move string-string
    else if (prevSn !== props.selectedSn && prevStid === null) {
      let temp = [];
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].md_sn === Number(props.selectedSn)) {
          temp.push([Number(props.data[i].endts), props.data[i].modulewatt]);
        }
      }
      setGraphData(temp);
    }
    // move module-string
    else if (prevStid === props.selectedStid && props.selectedSn === null) {
      let temp = [];
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].st_id === Number(props.selectedStid)) {
          temp.push([Number(props.data[i].endts), props.data[i].stringwatt]);
        }
      }
      setGraphData(temp);
    }
    // move string-module
    else if (prevSn === props.selectedSn && props.selectedStid === null) {
      let temp = [];
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].md_sn === Number(props.selectedSn)) {
          temp.push([Number(props.data[i].endts), props.data[i].modulewatt]);
        }
      }
      setGraphData(temp);
    }
  }, [props.selectedStid, props.selectedSn, props.data]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div
          className="d-flex justify-content-around"
          style={{ width: "100%" }}
        >
          <Button
            color="primary"
            style={
              props.timeRange === "day"
                ? { backgroundColor: "#007bff", color: "white" }
                : {}
            }
            outline
            onClick={() => props.setTimeRange("day")}
          >
            Day
          </Button>
          <Button
            color="primary"
            style={
              props.timeRange === "week"
                ? { backgroundColor: "#007bff", color: "white" }
                : {}
            }
            outline
            onClick={() => props.setTimeRange("week")}
          >
            Week
          </Button>
          <Button
            color="primary"
            style={
              props.timeRange === "month"
                ? { backgroundColor: "#007bff", color: "white" }
                : {}
            }
            outline
            onClick={() => props.setTimeRange("month")}
          >
            Month
          </Button>
        </div>
        <div className="d-flex justify-content-start m-3">
          {props.timeRange === "week" ? (
            <DatePicker
              selected={props.curDate}
              onChange={(date) => props.setcurDate(date)}
              highlightDates={weekDates}
            />
          ) : props.timeRange === "month" ? (
            <DatePicker
              selected={props.curDate}
              onChange={(date) => props.setcurDate(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          ) : (
            <DatePicker
              selected={props.curDate}
              onChange={(date) => props.setcurDate(date)}
            />
          )}
        </div>
        <TLChart
          highcharts={Highcharts}
          setPoint={setPoint}
          timeRange={props.timeRange}
          curDate={props.curDate}
          selectedSn={props.selectedSn}
          selectedStid={props.selectedStid}
          graphData={graphData}
        />
      </div>
    </div>
  );
};

export default TimeLapse;
