import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const AnalyticsCard = () => {
  return (
    <div className="w-80  border rounded-2xl mt-5 p-6 hover:shadow-xl bg-primary  transition duration-300 text-white">
      <div className="flex justify-around">
        <div className="flex flex-col space-y-1">
          <h1 className="font-bold text-sm">Markting Goal The Past Month</h1>
          <h1 className="text-xl font-bold">$4,564,654</h1>
          <span>you reached</span>
          <span className="font-bold">$4,654,48</span>
        </div>
        <div>
          <CircularProgressbar
            className="w-32 h-32 text-white"
            value={60}
            text={`60%`}
            styles={buildStyles({
              rotation: 1,
              pathColor: `rgb(254,254,254)`,
              textColor: "#ffffff",
              trailColor: "#3C36DC",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
