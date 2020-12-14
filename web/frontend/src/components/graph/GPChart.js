import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import startOfDay from "date-fns/startOfDay";
import "./chart.css";

const GPChart = (props) => {
  const [chartData, setChartData] = useState(null);
  const [chartTitle, setChartTitle] = useState("");

  let chart = useRef(null);
  useEffect(() => {
    chart = chart.current.chart;
  });

  useEffect(() => {
    if (
      props.data.data.length <= 0 ||
      props.data == null ||
      props.data != undefined
    ) {
      props.setFromDate(new Date(1580482800000));
      props.setToDate(new Date(1582988400000));
      return;
    }
    props.setFromDate(new Date(props.data.data[0][0]));
    props.setToDate(
      new Date(props.data.data[props.data.data.length - 1][0] + 86400000)
    );
  }, []);

  useEffect(() => {
    setChartData([props.data]);
    setChartTitle(props.data.name);
  }, [props.data]);

  useEffect(() => {
    const newMin = startOfDay(props.fromDate).valueOf();
    const newMax = startOfDay(props.toDate).valueOf();
    chart.xAxis[0].setExtremes(newMin, newMax);
  }, [props.fromDate, props.toDate]);

  const options = {
    chart: {
      type: "column",
      width: 800,
    },
    title: {
      text: "",
    },
    series: [
      {
        name: props.data.name,
        data: props.data.data,
      },
    ],
    rangeSelector: {
      enabled: false,
      buttons: [],
      verticalAlign: "top",
      buttonPosition: {
        align: "right",
      },
      inputEnabled: true,
      inputPosition: {
        align: "left",
      },
    },
    colors: ["#00A6D6", "#002E54"],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: function () {
              const point = { x: this.x, y: this.y };
              props.setPoint([
                new Date(point.x).toISOString().split("T")[0],
                point.y,
              ]);
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
        ref={chart}
      />
    </div>
  );
};

export default React.memo(GPChart);
