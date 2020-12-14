import React, { useState, useRef, useEffect } from "react";
import List from "./List";
import Detail from "./Detail";
import Layout from "./Layout";
import TimeLapse from "./TimeLapse";
import axios from "axios";
import { Spinner } from "reactstrap";
import groupBy from "./groupBy";

const Logical = (props) => {
  // gt_id of current gateway
  const [selectedGtid, setGtid] = useState(props.gatewayId);
  // st_id of selected string
  const [selectedStid, setStid] = useState(null);
  // sn of selected module
  const [selectedSn, setSn] = useState(null);
  // timeRange can be "day"/"week"/"month"
  const [timeRange, setTimeRange] = useState("day");

  const [curTime, setCurTime] = useState(null);
  const focusEl = useRef(null);

  const [curDate, setcurDate] = useState(new Date(1582988400000));

  const [data, setData] = useState(null);
  const [gatewayData, setGatewayData] = useState(
    props.sampleData.Gateway.devices[0]
  );

  const [timeGroupedData, setTimeGroupedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let off = new Date().getTimezoneOffset();
        let tempDate = String(curDate.getTime() - off * 60 * 1000);
        let url =
          "/api/logical/" + props.gatewayId + "/" + tempDate + "/" + timeRange;
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [timeRange, curDate]);

  useEffect(() => {
    if (selectedGtid) {
      setStid(null);
      setSn(null);
    }
  }, [selectedGtid]);

  useEffect(() => {
    if (selectedStid) {
      setGtid(null);
      setSn(null);
    }
  }, [selectedStid]);

  useEffect(() => {
    if (selectedSn) {
      setGtid(null);
      setStid(null);
    }
  }, [selectedSn]);

  useEffect(() => {
    // data가 변경되었고 빈 array가 아닌 경우 timeGroupedData 및 curTime 초기값 지정
    if (data && data.length == 0) alert("해당 기간의 데이터가 없습니다.");
    else if (data && data.length > 0) {
      setTimeGroupedData(groupBy(data, (d) => d.endts));
      setCurTime(data[0].endts);
    }
  }, [data]);

  useEffect(() => {
    // curTime이 변경되었고 null이 아닌 경우 timeGroupedData에서 해당 시간 가져옴
    if (curTime) {
      timeGroupedData.get(curTime);
    }
  }, [curTime]);

  if (!data || !curTime || data === [])
    return (
      <div className="container-fluid h-100 d-flex justify-content-center align-items-center flex-column">
        <Spinner style={{ width: "3rem", height: "3rem" }} />
        {"Loading"}
      </div>
    );

  var arr = [];
  for (var i = 0; i < 10; i++) arr[i] = i;
  return (
    <>
      <br />
      <div className="d-flex justify-content-end">
        <div
          className="card float-right"
          style={{ width: "60%", marginRight: "15px" }}
        >
          <div style={{ display: "flex" }}>
            {arr.map((index, i) => (
              <div
                key={i}
                className="card-body text-center"
                style={{
                  backgroundColor: `var(--lev${index})`,
                  fontSize: 10,
                  padding: "2px",
                }}
              >
                {index < 9 ? `~${index * 5 + 4}W` : `45W~`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "15px" }}>
        <div className="d-flex">
          <div>
            <List
              sampleData={props}
              setGtid={setGtid}
              setStid={setStid}
              setSn={setSn}
              selectedGtid={selectedGtid}
              selectedStid={selectedStid}
              selectedSn={selectedSn}
              setGatewayData={setGatewayData}
            />
            <Detail
              sampleData={props}
              selectedStid={selectedStid}
              selectedSn={selectedSn}
              gatewayData={gatewayData}
            />
          </div>
          <div
            style={{
              overflow: "auto",
              flex: 1,
            }}
          >
            <Layout
              sampleData={props}
              setGtid={setGtid}
              setStid={setStid}
              setSn={setSn}
              selectedGtid={selectedGtid}
              selectedStid={selectedStid}
              selectedSn={selectedSn}
              data={timeGroupedData.get(curTime)}
            />
            <TimeLapse
              setTimeRange={setTimeRange}
              timeRange={timeRange}
              selectedStid={selectedStid}
              selectedSn={selectedSn}
              selectedGtid={selectedGtid}
              data={data}
              setCurTime={setCurTime}
              curDate={curDate}
              setcurDate={setcurDate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logical;
