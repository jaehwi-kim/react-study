import React, { useRef, useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TLChart = (props) => {
  const [isPlaying, setPlay] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  let chart = useRef(null);

  // helper function to remove duplicate arrays
  let unique = (arr) => {
    var uniques = [];
    var itemsFound = {};
    for (var i = 0, l = arr.length; i < l; i++) {
      var stringified = JSON.stringify(arr[i]);
      if (itemsFound[stringified]) {
        continue;
      }
      uniques.push(arr[i]);
      itemsFound[stringified] = true;
    }
    return uniques;
  };

  let modData = (data) => {
    let tempArr = [];
    for (let i = 0; i < data.length; i++) {
      let temp = Math.exp(
        ((((data[i][0] / (1000 * 60 * 60)) % 24) - 12) ** 2 * -1) / (2 * 6.25)
      );
      let temp2 = (1 / (2.5 * Math.sqrt(2 * Math.PI))) * 12;
      let temp3 = temp * temp2;
      tempArr.push([data[i][0], data[i][1] * temp3]);
    }
    return tempArr;
  };

  let myData = unique(props.graphData);

  useEffect(() => {
    chart = chart.current.chart;
  });

  useEffect(() => {
    chart.xAxis[0].setExtremes(
      props.graphData[0] ? props.graphData[0][0] : 0,
      props.graphData[0] ? props.graphData[props.graphData.length - 1][0] : 0
    );
  }, [props.graphData]);

  const titleName = (myProps) => {
    switch (myProps.timeRange) {
      case "day":
        return {
          text:
            "Average Watt per 15 min of day: " +
            new Date(myProps.curDate).toISOString().slice(0, 10),
        };
      case "week":
        return {
          text:
            "Average Watt per hour of week: " +
            new Date(myProps.curDate - 6 * 86400000)
              .toISOString()
              .slice(0, 10) +
            " ~ " +
            new Date(myProps.curDate).toISOString().slice(0, 10),
        };
      case "month":
        return {
          text:
            "Average Watt per day of month: " +
            new Date(myProps.curDate).toISOString().slice(0, 7),
        };
      default:
        return {
          text: "",
        };
    }
  };

  const options = {
    chart: {
      type: "spline",
    },
    title: titleName(props),
    rangeSelector: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      plotLines: [
        {
          value: myData[0],
          color: "red",
          width: 2,
          id: 0,
          zIndex: 10,
          label: {
            text: myData[0] ? myData[0][1] : null,
            align: "right",
            x: -10,
            y: 16,
            rotation: 0,
          },
        },
      ],
    },
    series: [
      {
        data: myData,
        marker: {
          enabled: false,
        },
        type: "area",
      },
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: function () {
              const point = { x: this.x, y: this.y };
              props.setPoint([point.x, point.y]);
            },
          },
        },
      },
      area: {
        marker: {
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
  };

  const playAxis = (chart) => {
    setPlay(!isPlaying);
    let i = 0;
    let endIdx = myData.length;
    if (!isPlaying) {
      let intId = setInterval(() => {
        setIntervalId(intId);
        if (i < endIdx && chart.xAxis) {
          chart.xAxis[0].addPlotLine({
            value: [myData[i][0]] ? [myData[i][0]] : 0,
            color: "red",
            width: 2,
            id: i,
            zIndex: 10,
            label: {
              text: myData[i][1],
              align: "right",
              x: -10,
              y: 16,
              rotation: 0,
            },
          });
          chart.xAxis[0].removePlotLine(i - 1);
          props.setPoint([myData[i][0], myData[i][1]]);
        } else {
          clearInterval(intervalId);
        }
        i++;
      }, 100);
    } else {
      clearInterval(intervalId);
    }
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
        ref={chart}
      />
      <button
        onClick={() => {
          playAxis(chart);
        }}
        style={{ alignSelf: "flex-start" }}
      >
        {isPlaying ? (
          <FontAwesomeIcon icon={faStop} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faPlay} size="2x" />
        )}
      </button>
    </div>
  );
};

export default React.memo(TLChart);
