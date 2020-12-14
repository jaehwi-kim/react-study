import React, { forwardRef, useState, useEffect } from "react";
import Module from "./Module";
import "../../styles/common.css";
import groupBy from "./groupBy";

const String = forwardRef((props, ref) => {
  let data = props.data;

  const [grouped, setGrouped] = useState(null);
  useEffect(() => {
    if (data) {
      setGrouped(groupBy(data, (d) => d.md_sn));
    }
  }, [data]);

  if (grouped == null) return <></>;

  return (
    <>
      <div>
        <div
          className="row justify-content-left"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div className="d-flex">
            <div
              className={
                "card border-left-primary shadow m-lg-2 text-center " +
                (props.checked && " selected")
              }
              onClick={() => props.setStid(props.stid)}
              style={{
                fontWeight: "500",
              }}
            >
              <div
                className="card-body"
                tabIndex={[(props.i + 1) * 31]}
                style={{ minWidth: "87px" }}
              >
                S{props.i + 1}
                <br />
                {data && data[0].stringwatt}W
                <br />
                {data && data[0].stringvoltage}V
                <br />
                {data && data[0].stringtemperature}℃
              </div>
            </div>
            {props.module.map((j, index) =>
              props.selectedSn === j ? (
                <Module
                  stringIndex={props.i + 1}
                  index={index}
                  key={index}
                  setSn={props.setSn}
                  mSerialNo={j}
                  checked={true}
                  data={grouped.get(Number(j))}
                />
              ) : (
                <Module
                  stringIndex={props.i + 1}
                  index={index}
                  key={index}
                  setSn={props.setSn}
                  mSerialNo={j}
                  checked={false}
                  data={grouped.get(Number(j))}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default String;
