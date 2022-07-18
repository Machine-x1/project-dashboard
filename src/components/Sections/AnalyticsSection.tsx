import { useState } from "react";
import {
  CartesianGrid,
  LineChart,
  Tooltip,
  XAxis,
  Line,
  ResponsiveContainer,
  Legend,
  YAxis,
  Bar,
  BarChart,
} from "recharts";
import Chart from "react-apexcharts";

const AnalyticsSection = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className=" p-3  max-h-[28rem]  border rounded-2xl">
      <div id="chart" className="py-3">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          className=" "
        />
      </div>
    </div>
  );
};

export default AnalyticsSection;

// import {
//   CartesianGrid,
//   LineChart,
//   Tooltip,
//   XAxis,
//   Line,
//   ResponsiveContainer,
//   Legend,
//   YAxis,
//   Bar,
//   BarChart,
// } from "recharts";

// const AnalyticsSection = () => {
//   const data = [
//     { name: "Jun", uv: 0, pv: 0, amt: 0 },
//     { name: "Feb", uv: 50, pv: 500, amt: 2400 },
//     { name: "Mar", uv: 200, pv: 500, amt: 2400 },
//     { name: "Apr", uv: 100, pv: 900, amt: 2300 },
//     { name: "May", uv: 150, pv: 850, amt: 2800 },
//     { name: "Jun", uv: 180, pv: 2000, amt: 2400 },
//   ];
//   const screen = window.innerWidth;

//   return (
//     <div className=" p-3  border rounded-2xl">
//       <div id="chart" className="py-3">
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart
//             className="barChart"
//             width={600}
//             height={300}
//             data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="uv" barSize={10} fill="#05386b" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsSection;
