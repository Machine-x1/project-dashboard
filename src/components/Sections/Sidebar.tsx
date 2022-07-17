import Logo from "../../assets/images/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsHandbag, BsWallet } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
const Sidebar = () => {
  const [hideSide, sethideSide] = useState(false);
  const sideBarClass = "-left-96 transition-all duration-700";
  const mainListItems = [
    {
      itemName: "Dashboard",
      icon: <MdOutlineSpaceDashboard size={25} />,
      ref: "#",
    },
    {
      itemName: "Analytics",
      icon: <DiGoogleAnalytics size={25} />,
      ref: "#",
    },
    {
      itemName: "Sales",
      icon: <BsWallet size={25} />,
      ref: "#",
    },
    {
      itemName: "Products",
      icon: <BsHandbag size={25} />,
      ref: "#",
    },
    {
      itemName: "Customer",
      icon: <FiUsers size={25} />,
      ref: "#",
    },
    {
      itemName: "Traffic",
      icon: <IoAnalyticsOutline size={25} />,
      ref: "#",
    },
    {
      itemName: "Reports",
      icon: <TbReportAnalytics size={25} />,
      ref: "#",
    },
  ];

  return (
    <div
      className={` ${
        hideSide ? sideBarClass : ""
      }   w-72 h-screen hidden lg:block relative `}
    >
      {/* Logo Back Here Again Margin Problem */}
      <div className="flex items-center space-x-2 pt-8 px-4 p-2 ">
        <img src={Logo} alt="" className="" />
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
      </div>
      {/* List Items */}
      <div className="mt-6 mx-3 ">
        {mainListItems.map((item, key) => (
          <a href={item.ref} key={key}>
            <ul className="flex items-center my-3 hover:scale-105  text-font_primary hover:bg-primary hover:text-white transition-all duration-200 focus:bg-primary space-x-2 px-3 p-2 py-4 rounded-2xl text-lg font-semibold">
              {item.icon}
              <li>{item.itemName}</li>
            </ul>
          </a>
        ))}

        {/* Hide SideBar  */}
        <div
          className={` absolute right-0  top-2/3 bg-primary  p-2 rounded-tl-xl rounded-bl-xl`}
        >
          <AiOutlineArrowLeft
            onClick={() => sethideSide(!hideSide)}
            size={20}
            className=" text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
