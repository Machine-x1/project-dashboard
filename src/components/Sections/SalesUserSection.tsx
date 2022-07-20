import Avatar from "../../assets/images/avatar.jpg";

const SalesUserSection = () => {
  const salesUsers = [
    {
      images: Avatar,
      name: "Boyka",
      time: "8",
      money: 120.0,
    },
    {
      images: Avatar,
      name: "Joy Tribiany",
      time: "5",
      money: 120.0,
    },
    {
      images: Avatar,
      name: "Ross Galler",
      time: "5",
      money: 120.0,
    },
    {
      images: Avatar,
      name: "Chandler Bing",
      time: "5",
      money: 120.0,
    },
    {
      images: Avatar,
      name: "Phebe buffey",
      time: "5",
      money: 120.0,
    },
  ];

  return (
    <div className="  h-[29rem]  p-3 rounded-2xl border">
      <h1 className="text-xl font-bold">Recent Sales</h1>
      <div className="flex flex-col">
        {salesUsers.map((item, key) => (
          <div key={key} className="flex items-center justify-around">
            {/* User Part */}
            <div className=" my-2 flex w-full space-x-3 ">
              <img
                src={item.images}
                alt=""
                className="rounded-full w-12 h-12"
              />
              <div className=" ">
                <h1 className="font-bold">{item.name}</h1>
                <span className="text-font_primary">
                  {item.time} Minutes ago
                </span>
              </div>
            </div>

            {/* Money Part */}
            <div className="mx-3">
              <h1 className="text-green-400 font-bold">${item.money}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesUserSection;
