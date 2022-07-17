import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Lang from "../../assets/images/lang.png";
import Avatar from "../../assets/images/avatar.jpg";

const Navbar = () => {
  return (
    <div className="h-15  ">
      <div className="flex items-center  md:justify-between">
        {/* Descriptio */}
        <div className="p-2">
          <h1 className="text-xl font-bold">Dashbaord Overview</h1>
          <span className="text-font_primary">
            12:05 at 19th Novermber 2022
          </span>
        </div>

        <div className="flex items-center md:space-x-5">
          {/* Search */}
          <div className="hidden md:flex w-fit h-12   px-4 py-2  items-center space-x-2 rounded-xl  border-2">
            <input
              type="text"
              className="outline-none"
              placeholder="Search.."
            />
            <AiOutlineSearch size={20} className="text-font_primary" />
          </div>

          {/* Notification */}
          <div className="hidden md:block p-1 rounded-xl border-2 relative ">
            <IoMdNotificationsOutline className="text-font_primary w-9 h-9" />
            <div className="absolute top-0 right-0 h-3 w-3 rounded-full animate-pulse bg-red-500"></div>
          </div>
          {/* Lang */}
          <div className="hidden md:block p-1 rounded-xl border-2  ">
            <img src={Lang} className="w-9 h-9" alt="" />
          </div>
          {/* Avatar */}
          <div className="p-1 rounded-xl ">
            <img src={Avatar} className="w-12 h-12 rounded-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
