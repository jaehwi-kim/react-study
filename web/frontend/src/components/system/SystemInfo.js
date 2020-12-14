import React from "react";
import "../../styles/common.css";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
import { faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapAPI from "./MapAPI";
import panel from "../../images/QPEAK_G4_1.jpg";

const SystemInfo = (props) => {
  return (
    <div>
      <div className="card shadow m-4">
        <div className="card-header py-2">System Overview</div>
        <div className="card-body d-flex justify-content-around align-items-center p-2 flex-wrap">
          {/*<div className="text-center">*/}
          <MapAPI />
          <div>
            {/* <FontAwesomeIcon
              icon={faSolarPanel}
              size="10x"
              style={{ margin: "0.2em" }}
            /> */}
            <div
              style={{
                width: "260px",
                height: "260px",
                border: "1px solid #e0e2e6",
                margin: "10px",
                textAlign: "center",
              }}
            >
              <img src={panel} height="260px" style={{ padding: "10px" }} />
            </div>
            <div
              style={{
                borderLeft: "1px solid rgb(0,0,0,0.1)",
                height: "100%",
              }}
            ></div>
          </div>
          {/*</div>*/}
          <div style={{ color: "black" }}>
            <Table className="text-center">
              <tbody style={{ color: "black" }}>
                {/* <ListGroup> */}
                {Object.keys(props.sysData).map((key, i) => {
                  return (
                    // <ListGroupItem key={i}>
                    //   {key}: {props.sysData[key]}
                    // </ListGroupItem>
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{props.sysData[key]}</td>
                    </tr>
                  );
                })}
                {/* </ListGroup> */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
