import React from "react";
import Layout from "../components/Layout";
import AnalyticsSection from "../components/Sections/AnalyticsSection";
import CardSection from "../components/Sections/CardSection";
import TableSection from "../components/Sections/TableSection";

const Index = () => {
  return (
    <Layout>
      <CardSection />
      <AnalyticsSection />
      <TableSection />
    </Layout>
  );
};

export default Index;
