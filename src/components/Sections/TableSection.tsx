import { useState } from "react";

const TableSection = () => {
  const header = [
    "ID",
    "Customer Name",
    "Date",
    "amount",
    "Email",
    "Product ID",
    "Status",
    // "Options",
  ];

  const [data, setData] = useState([
    {
      id: 1,
      customerName: "Ross",
      date: "2020-10-5",
      amount: 120.5,
      email: "Ross@arm.com",
      productID: 55,
      status: "active",
      // option:'asd'
    },
    {
      id: 8,
      customerName: "Joy",
      date: "2022-03-1",
      amount: 3500.5,
      email: "Joy@arm.com",
      productID: 332,
      status: "Pending",
      // option:'asd'
    },
    {
      id: 6,
      customerName: "Chandler",
      date: "2020-10-5",
      amount: 120.5,
      email: "Chandler@arm.com",
      productID: 64,
      status: "Cloased",
      // option:'asd'
    },
    {
      id: 4,
      customerName: "Monica",
      date: "2020-10-5",
      amount: 1850.5,
      email: "Monica@arm.com",
      productID: 21,
      status: "active",
      // option:'asd'
    },
  ]);

  // const sorting = (list: any) => {
  //   // const data = [
  //   //   { id: 1, name: "asd" },
  //   //   { id: 4, name: "zsd" },
  //   //   { id: 2, name: "bsd" },
  //   //   { id: 4, name: "csd" },
  //   //   { id: 9, name: "qsd" },
  //   // ];
  //   return list.sort((a: any, b: any): any =>
  //     a.customerName.localeCompare(b.customerName)
  //   );
  // };

  return (
    <div className="border p-4 rounded-3xl mt-8">
      <h1 className="mx-4 text-xl font-bold">Table</h1>

      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
            <div className="">
              <table className="w-full">
                <thead className="">
                  <tr>
                    {header.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="text-sm font-bold text-gray-900 px-6 py-4 text-left cursor-pointer"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-primary rounded-2xl transition duration-300 hover:scale-95 hover:text-white text-gray-900"
                    >
                      <td className="px-6 py-4  whitespace-nowrap rounded-l-xl  text-sm font-medium ">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {item.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-medium ">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {item.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {item.productID}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap rounded-r-xl text-sm font-medium ">
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
