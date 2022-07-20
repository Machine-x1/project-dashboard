import Search from "../Search";
import Table from "../Table";
const TableSection = () => {
  const header = [
    "ID",
    "Customer Name",
    "Date",
    "amount",
    "Email",
    "Product ID",
    "Status",
  ];
  return (
    <div className="border p-4 rounded-3xl mt-8">
      <div className="flex justify-between">
        <h1 className="mx-4 text-xl font-bold">Table</h1>
        <div className="flex space-x-2">
          <button className="bg-primary px-5 py-2 border border-primary hover:bg-white hover:text-primary hover:scale-105 transition duration-200 rounded-2xl text-white font-bold">
            Add User
          </button>
          <Search />
        </div>
      </div>

      <div className="mx-10">
        <Table />
      </div>
    </div>
  );
};

export default TableSection;

//
