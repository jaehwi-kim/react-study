import React, { useState } from "react";
import Highcharts from "highcharts";
import GPChart from "./GPChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./GraphDetail.css";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const GraphDetail = (props) => {
  const [curPoint, setPoint] = useState(["", 0]);
  const [activeTab, setActiveTab] = useState(1);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-2">Graph</div>
      <div className="card-body">
        <Nav tabs>
          {props.data != null &&
            Array.from(props.data).map((d, idx) => {
              return (
                <NavItem key={idx + 1}>
                  <NavLink
                    className={classnames({ active: activeTab === idx + 1 })}
                    onClick={() => {
                      toggle(idx + 1);
                    }}
                  >
                    {d.name.toUpperCase()}
                  </NavLink>
                </NavItem>
              );
            })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {props.data != null &&
            Array.from(props.data).map((d, idx) => {
              return (
                <TabPane tabId={idx + 1} key={idx + 1}>
                  <Row>
                    <Col sm="12">
                      <div className="d-flex chartWrapper">
                        <div className="d-flex m-3 w-100">
                          <div className="mr-sm-1">
                            From:{" "}
                            <DatePicker
                              selected={fromDate}
                              onChange={(date) => setFromDate(date)}
                            />
                          </div>
                          <div>
                            To:{" "}
                            <DatePicker
                              selected={toDate}
                              onChange={(date) => setToDate(date)}
                            />
                          </div>
                        </div>
                        <GPChart
                          highcharts={Highcharts}
                          setPoint={setPoint}
                          data={d}
                          selectedItemType={props.selectedItemType}
                          fromDate={fromDate}
                          toDate={toDate}
                          setFromDate={setFromDate}
                          setToDate={setToDate}
                        ></GPChart>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              );
            })}
        </TabContent>
      </div>
    </div>
  );
};

export default GraphDetail;
