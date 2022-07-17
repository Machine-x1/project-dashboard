import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sections/Sidebar";

const Index = () => {
  return (
    <div className="flex bg-background_primary ">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Index;
