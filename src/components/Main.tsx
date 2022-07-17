import Navbar from "./Sections/Navbar";
import CardSection from "./Sections/CardSection";
import AnalyticsSection from "./Sections/AnalyticsSection";
import SalesUserSection from "./Sections/SalesUserSection";
import TableSection from "./Sections/TableSection";

const Main = () => {
  return (
    <div className="bg-white w-screen mr-4  mt-5 rounded-t-[3rem] px-6 py-4">
      <Navbar />
      <CardSection />
      <div className="flex mt-8">
        <AnalyticsSection />
        <SalesUserSection />
      </div>
      <TableSection />
    </div>
  );
};

export default Main;
