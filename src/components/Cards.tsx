import { ReactNode } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

interface ICard {
  cardIcon: ReactNode;
  cardIconColor: string;
  high: boolean;
  statisticsNumber: number;
  sales: number;
  compared?: number;
}

const Cards = ({
  cardIcon,
  cardIconColor,
  high,
  statisticsNumber,
  sales,
  compared = 1916548,
}: ICard) => {
  return (
    <div className="w-72  border rounded-2xl mt-5 p-6 shadow-md hover:bg-primary  transition duration-300 hover:text-white">
      {/* Cart Part */}
      <div className="flex items-center space-x-3 ">
        {/* Cart Icon */}
        <div
          className={`p-3  border  rounded-xl bg-white shadow-sm  ${cardIconColor}`}
        >
          {cardIcon}
        </div>
        {high ? (
          <div className="flex items-center space-x-2 text-green-400">
            <FiArrowUpRight size={15} className="bg-green-100 rounded-full " />
            <span className="font-semibold text-sm">+{statisticsNumber}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-red-400">
            <FiArrowDownRight size={15} className="bg-red-100 rounded-full " />
            <span className="font-semibold text-sm">-{statisticsNumber}</span>
          </div>
        )}
      </div>

      {/* Numbers Part */}
      <div className="mt-3">
        <span className="text-font_primary text-sm font-semibold">
          Total Sales
        </span>
        <h1 className="text-xl  font-bold">${sales}</h1>
        <span className="text-font_primary text-sm">
          Compared to (${compared}) last Year
        </span>
      </div>
    </div>
  );
};

export default Cards;
