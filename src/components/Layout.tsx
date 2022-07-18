import React, { ReactNode } from "react";
import Navbar from "./Sections/Navbar";
import Sidebar from "./Sections/Sidebar";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex bg-background_primary ">
      <Sidebar />
      <div className="bg-white  mr-4 mt-5 w-screen rounded-t-[3rem] px-4 py-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
