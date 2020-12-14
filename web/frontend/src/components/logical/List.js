import React, { useState, useEffect } from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const List = (props) => {
  let sample = props.sampleData.sampleData;
  let gateway = sample.Gateway.devices[0];
  let strings = sample.Strings;
  let mainList = Object.keys(sample);
  const idSerialNoOfString = strings.devices.map((device) => {
    return { id: device.info.id, serialNo: device.info.serialNo };
  });
  let modules = strings.devices.map((device) =>
    device.Modules.devices.map((mS) => mS.moduleSerial)
  );

  let modules2 = strings.devices.map((device) => {
    return {
      id: device.info.id,
      modules: device.Modules.devices.map((mS) => mS.moduleSerial),
    };
  });

  const [expanded, setExpanded] = useState(["Strings"]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (props.selectedGtid != null) {
      setSelected("Gateway");
      setExpanded(["Strings"]);
    } else if (props.selectedStid != null) {
      setSelected("String" + props.selectedStid);
      setExpanded(["Strings"]);
    } else if (props.selectedSn != null) {
      setSelected("Module" + props.selectedSn);
      let expandedModule = null;
      if (props.selectedSn != null) {
        modules2.forEach(function (mod) {
          mod.modules.forEach(function (m) {
            if (props.selectedSn === m) {
              expandedModule = ["Strings", "String" + mod.id];
            }
          });
        });
        setExpanded(expandedModule);
      }
    }
  }, [props.selectedGtid, props.selectedStid, props.selectedSn]);

  return (
    <div className="card shadow mb-4" style={{ marginRight: 20 }}>
      <div className="card-header py-2">List</div>
      <div className="card-body">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultSelected="Gateway"
          defaultExpanded={["Strings"]}
          selected={selected}
          expanded={expanded}
        >
          <TreeItem
            key={mainList[0]}
            nodeId={mainList[0]}
            label={"Gateway"}
            onClick={() => {
              props.setGtid(gateway.id);
              props.setItemType !== undefined && props.setItemType("gateway");
            }}
          ></TreeItem>
          <TreeItem
            key={mainList[1]}
            nodeId={mainList[1]}
            label={mainList[1]}
          ></TreeItem>
          <TreeItem
            key={mainList[2]}
            nodeId={mainList[2]}
            label={mainList[2]}
            onIconClick={() => {
              if (expanded.includes("Strings")) {
                setExpanded([]);
              } else {
                setExpanded(["Strings"]);
              }
            }}
          >
            {idSerialNoOfString.map((idsn, index) => {
              return (
                <TreeItem
                  key={idsn.serialNo}
                  nodeId={"String" + idsn.id}
                  label={"String" + idsn.id}
                  onClick={() => {
                    props.setStid(idsn.id);
                    props.setItemType !== undefined &&
                      props.setItemType("strings");
                  }}
                  onIconClick={() => {
                    if (expanded.includes("String" + idsn.id)) {
                      setExpanded(["Strings"]);
                    } else {
                      setExpanded(["Strings", "String" + idsn.id]);
                    }
                  }}
                  onLabelClick={() => {
                    if (expanded.includes("String" + idsn.id)) {
                      setExpanded(["Strings"]);
                    } else {
                      setExpanded(["Strings", "String" + idsn.id]);
                    }
                  }}
                >
                  {modules[index].map((nM, index2) => {
                    return (
                      <TreeItem
                        key={nM}
                        nodeId={"Module" + nM}
                        label={"Module" + (index2 + 1)}
                        onClick={() => {
                          props.setSn(nM);
                          props.setItemType !== undefined &&
                            props.setItemType("modules");
                        }}
                      />
                    );
                  })}
                </TreeItem>
              );
            })}
          </TreeItem>
        </TreeView>
      </div>
    </div>
  );
};

export default List;
