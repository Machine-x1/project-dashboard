import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationBell = () => {
  return (
    <div className="hidden hover:bg-primary hover:text-white transition duration-200 text-font_primary md:block p-1 rounded-xl border-2 relative ">
      <IoMdNotificationsOutline className=" w-9 h-9" />
      <div className="absolute top-0 right-0 h-3 w-3 rounded-full animate-pulse bg-red-500"></div>
    </div>
  );
};

export default NotificationBell;
