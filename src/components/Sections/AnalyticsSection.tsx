import { CartesianGrid, LineChart, Tooltip, XAxis, Line } from "recharts";

const AnalyticsSection = () => {
  const data = [
    { name: "Jun", uv: 100, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 100, pv: 1398, amt: 2400 },
    { name: "Mar", uv: 100, pv: 1398, amt: 2400 },
    { name: "Apr", uv: 100, pv: 1365, amt: 2300 },
    { name: "May", uv: 100, pv: 1365, amt: 2800 },
    { name: "Jun", uv: 100, pv: 1398, amt: 2400 },
  ];
  return (
    <div className=" w-3/4 p-3  border rounded-2xl">
      <div id="chart" className="py-3">
        <LineChart
          width={1130}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </div>
    </div>
  );
};

export default AnalyticsSection;
