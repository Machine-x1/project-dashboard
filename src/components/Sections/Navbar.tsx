import Lang from "../../assets/images/lang.png";
import Avatar from "../../assets/images/avatar.jpg";
import Search from "../Search";
import NotificationBell from "../NotificationBell";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import SelectButton from "../SelectButton";

const Navbar = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-15  ">
      <div className="flex mx-auto items-center justify-around  md:justify-between">
        {/* Descriptio */}
        <div className="p-2">
          <h1 className="text-xl font-bold">Dashbaord Overview</h1>
          <span className="text-font_primary">
            {/* 12:05 at 19th Novermber 2022 */}
            {/* {`${date.getHours()}:${date.getMinutes()} at ${date.getDay()} ${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`} */}
          </span>
        </div>

        <div className="flex items-center md:space-x-5">
          {/* Search */}
          <Search />
          {/* Notification */}
          <SelectButton
            default="This Year"
            list={[2002, 2001, 2003, 2004, 2005]}
          />
          <NotificationBell />
          {/* Lang */}
          <div className="hidden  transition duration-200 md:block p-1 rounded-xl border-2  ">
            <img src={Lang} className="w-9 h-9" alt="" />
          </div>
          {/* Avatar */}
          <div className="p-1 rounded-xl  ">
            <img src={Avatar} className="w-12 h-12 rounded-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
