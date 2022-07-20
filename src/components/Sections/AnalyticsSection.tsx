import { useState } from "react";

import Chart from "react-apexcharts";
import SelectButton from "../SelectButton";
import SalesUserSection from "./SalesUserSection";

const AnalyticsSection = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "line",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "top" as "top",
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        min: 0,
        max: 80,
      },
      colors: ["#ECABF6", "#1097FF", "#00000"],
    },

    series: [
      {
        name: "Markting Sales",
        data: [0, 49, 24, 55, 28, 8, 33, 28, 53, 8, 33],
        showLine: false,
      },
      {
        name: "Online Sales",
        data: [0, 30, 70, 16, 28, 45, 10, 28, 28, 8, 33],
      },
    ],
  });

  return (
    <div className=" py-3 flex gap-3 md:flex-row flex-col justify-between items-center">
      <div id="chart" className="py-3 w-full max-h-[29rem] border rounded-2xl">
        <div className="px-4 flex justify-between">
          <h1 className="text-xl font-bold">Sales analysis</h1>
          <SelectButton
            default="This Year"
            list={[2002, 2001, 2003, 2004, 2005]}
          />
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="area"
          height={400}
        />
      </div>
      <div className="w-full lg:w-[35%]">
        <SalesUserSection />
      </div>
    </div>
  );
};
// <SalesUserSection />;

export default AnalyticsSection;
