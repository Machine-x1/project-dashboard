import Cards from "../Cards";
import { BsCart4, BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaTicketAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import AnalyticsCard from "../AnalyticsCard";
const CardSection = () => {
  return (
    <div className="flex md:flex-row flex-col max-w-screen-2xl  items-center md:space-x-3">
      <Cards
        cardIcon={<BsCart4 size={20} />}
        cardIconColor="text-blue-500"
        high={true}
        statisticsNumber={18.55}
        sales={1565464555}
      />
      <Cards
        cardIcon={<BsFillCreditCard2BackFill size={20} />}
        cardIconColor="text-green-500"
        high={false}
        statisticsNumber={18.55}
        sales={1565464555}
      />
      <Cards
        cardIcon={<FaTicketAlt size={20} />}
        cardIconColor="text-yellow-500"
        high={false}
        statisticsNumber={18.55}
        sales={1565464555}
      />
      <Cards
        cardIcon={<FaWallet size={20} />}
        cardIconColor="text-red-500"
        high={true}
        statisticsNumber={18.55}
        sales={1565464555}
      />
      <AnalyticsCard />
    </div>
  );
};

export default CardSection;
