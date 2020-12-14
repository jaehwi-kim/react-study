import React, { forwardRef, useEffect, useRef, useState } from "react";
import String from "./String";
import "./Layout.css";
import groupBy from "./groupBy";
import { MapInteractionCSS } from "react-map-interaction";

const Layout = forwardRef((props, ref) => {
  const data = props.data;
  const sample = props.sampleData.sampleData;
  const [grouped, setGrouped] = useState(null);

  useEffect(() => {
    if (data) {
      setGrouped(groupBy(data, (strings) => strings.st_id));
    }
  }, [data]);

  let gateway = sample.Gateway.devices[0];
  let strings = sample.Strings;
  let idOfString = strings.devices.map((device) => device.info.id);
  let modules = strings.devices.map((device) =>
    device.Modules.devices.map((mS) => mS.moduleSerial)
  );
  const scrollEl = useRef(null);

  if (grouped == null) return;

  return (
    <>
      <div
        className="card custom-shadow mb-4"
        style={{
          height: "330px",
        }}
      >
        <div className="card-header py-2">Logical Layout cards</div>
        <div className="card-body d-flex" style={{ padding: "0.5rem" }}>
          <div
            className={
              "card custom-shadow d-flex justify-content-center text-center " +
              (props.selectedGtid === gateway.id && " selected")
            }
            style={{
              marginRight: 10,
              padding: 10,
              fontSize: 12,
              minWidth: "80px",
              fontWeight: "500",
            }}
            onClick={() => props.setGtid(gateway.id)}
          >
            <span>Gateway</span>
            {grouped.get(idOfString[0])[0].totalwatt}W
          </div>
          <div style={{ minWidth: "90%" }}>
            <MapInteractionCSS
              defaultValue={{ scale: 0.35, translation: { x: 1, y: 1 } }}
              minScale={0.35}
              showControls={true}
              btnClass="resize-btn"
            >
              <div
                className="col"
                style={{
                  flexWrap: "nowrap",
                }}
                ref={scrollEl}
              >
                {idOfString.map((id, i) =>
                  props.selectedStid === id ? (
                    <String
                      i={i}
                      key={i}
                      module={modules[i]}
                      setSn={props.setSn}
                      setStid={props.setStid}
                      stid={id}
                      checked={true}
                      selectedSn={props.selectedSn}
                      data={grouped.get(id)}
                    />
                  ) : (
                    <String
                      i={i}
                      key={i}
                      module={modules[i]}
                      setSn={props.setSn}
                      setStid={props.setStid}
                      stid={id}
                      checked={false}
                      selectedSn={props.selectedSn}
                      data={grouped.get(id)}
                    />
                  )
                )}
              </div>
            </MapInteractionCSS>
          </div>
        </div>
      </div>
    </>
  );
});

export default Layout;
