import React from "react";
import Layout from "../components/Layout";
import AnalyticsSection from "../components/Sections/AnalyticsSection";
import CardSection from "../components/Sections/CardSection";
import SalesUserSection from "../components/Sections/SalesUserSection";
import TableSection from "../components/Sections/TableSection";

const Index = () => {
  return (
    <Layout>
      <CardSection />
      <div className="flex flex-col space-y-4 md:space-y-0 items-center max-w-screen-2xl w-full lg:flex-row  mt-8">
        <AnalyticsSection />
        <SalesUserSection />
      </div>
      <TableSection />
    </Layout>
  );
  // return (
  //   <div className="flex bg-background_primary ">
  //     <Sidebar />
  //     <Main>
  //       <AnalyticsSection />
  //       <SalesUserSection />
  //     </Main>
  //   </div>
  // );
};

export default Index;
