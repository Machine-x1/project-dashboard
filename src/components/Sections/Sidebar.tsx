import Logo from "../../assets/images/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsHandbag, BsWallet, BsArrowRightShort } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const listlIems = [
    {
      itemName: "Dashboard",
      icon: <MdOutlineSpaceDashboard size={25} />,
      ref: "/",
    },
    {
      itemName: "Analytics",
      icon: <DiGoogleAnalytics size={25} />,
      ref: "/edit",
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
    {
      itemName: "Profile",
      icon: <CgProfile size={25} />,
      ref: "#",
      notification: 8,
    },
    {
      itemName: "Settings",
      icon: <AiOutlineSetting size={25} />,
      ref: "#",
      notification: 15,
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBarClass, setsideBarClass] = useState(
    "top-0 right-0 w-[80vw] bg-primary text-white p-10 pl-20    fixed h-full z-50"
  );

  return (
    <div>
      <div
        className={` ${
          showSidebar
            ? sideBarClass
            : " w-72 h-screen text-primary  hidden lg:block relative"
        }   `}
      >
        <div className="flex items-center space-x-2 pt-8 px-4 p-2 ">
          <img src={Logo} alt="" className="" />
          <h1 className="text-2xl font-bold ">Dashboard</h1>
        </div>
        {/* List Items */}
        <div className="mt-6 mx-3 ">
          {listlIems.map((item, key) => (
            <Link to={item.ref} key={key}>
              <ul className="flex items-center my-3 hover:scale-105 justify-between  text-font_primary hover:bg-primary hover:text-white transition-all duration-200 focus:bg-primary  px-3 p-2 py-4 rounded-2xl text-lg font-semibold">
                <li className="flex items-center gap-2">
                  {item.icon}
                  {item.itemName}
                </li>
                {item.notification && (
                  <span className="bg-[#99B2C6] h-5 w-6 text-sm flex justify-center rounded-full text-white">
                    15
                  </span>
                )}
              </ul>
            </Link>
          ))}
        </div>
      </div>
      <div className=" fixed z-50 top-1/2 bg-primary h-12 flex md:hidden items-center rounded-r-xl ">
        <BsArrowRightShort
          size={18}
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white"
        />
      </div>
    </div>
  );
};

export default Sidebar;
