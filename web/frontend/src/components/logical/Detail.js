import React from "react";
import "./Detail.css";

const Detail = (props) => {
  function getGatewayData() {
    let gatewayInfo = [];
    if (props.gatewayData != null) {
      const overview = props.gatewayData;
      const tempKeys = Object.keys(overview).map((key) => {
        return typeof overview[key] === "object"
          ? [key + "-" + Object.keys(overview[key])[0]]
          : [key];
      });
      const tempVals = Object.values(overview).map((val) => {
        return typeof val === "object" ? [Object.values(val)[0]] : [val];
      });
      const tempData = Object.assign(
        {},
        ...tempKeys.map((n, index) => ({ [n]: tempVals[index] }))
      );
      gatewayInfo.push(
        <div key="gtw_key">
          <font className="small-title">Gateway</font>
        </div>
      );
      gatewayInfo.push(
        Object.keys(tempData).map((key, i) => {
          if (key !== "startTs" && key !== "endTs") {
            return (
              <div key={key}>
                {key}: {tempData[key]}
              </div>
            );
          }
        })
      );
    }
    return gatewayInfo;
  }

  function getSelectedStringData() {
    const strings = props.sampleData.sampleData.Strings.devices;
    let stInfo = [];
    strings.map((st) => {
      if (st.info.id === props.selectedStid) {
        const stringInfo = st.info;
        stInfo.push(
          <div key={"String"}>
            <font className="small-title">String</font>
          </div>
        );
        stInfo.push(
          Object.keys(stringInfo).map((key, index) => {
            if (stringInfo[key] != null) {
              return (
                <div key={key}>
                  {key}: {stringInfo[key]}
                </div>
              );
            }
          })
        );
      }
    });
    return stInfo;
  }

  function getSelectedModuleData() {
    const strings = props.sampleData.sampleData.Strings.devices;
    let stInfo = [];
    strings.map((st) => {
      if (st.info.serialNo === props.selectedSn) {
        const stringInfo = st.info;
        stInfo.push(
          <div key={"String"}>
            <font className="small-title">String</font>
          </div>
        );
        stInfo.push(
          Object.keys(stringInfo).map((key, index) => {
            if (stringInfo[key] != null) {
              return (
                <div key={key}>
                  {key}: {stringInfo[key]}
                </div>
              );
            }
          })
        );
      }
    });
    const modules = strings.map((st) => {
      const tempData = Object.assign(
        {},
        { stringInfo: st.info },
        { modules: st.Modules.devices }
      );
      return tempData;
    });
    modules.map((module) => {
      module.modules.map((m) => {
        if (m.moduleSerial === props.selectedSn) {
          const stringInfo = module.stringInfo;
          stInfo.push(
            <div key={"String"}>
              <font className="small-title">String</font>
            </div>
          );
          stInfo.push(
            Object.keys(stringInfo).map((key) => {
              if (stringInfo[key] != null) {
                return (
                  <div key={key}>
                    {key}: {stringInfo[key]}
                  </div>
                );
              }
            })
          );
          stInfo.push(
            <div key={"Module"}>
              <font className="small-title">Module</font>
            </div>
          );
          stInfo.push(
            <div key={m.moduleSerial}>
              {"moduleSerial"}: {m.moduleSerial}
            </div>
          );
        }
      });
    });
    return stInfo;
  }

  return (
    <div className="card shadow mb-4" style={{ marginRight: 20 }}>
      <div className="card-header py-2">Detail Information</div>
      <div className="card-body">
        {getGatewayData()}
        {props.selectedStid ? getSelectedStringData() : getSelectedModuleData()}
      </div>
    </div>
  );
};

export default Detail;
