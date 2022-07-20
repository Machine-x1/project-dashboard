import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ISearch {
  data?: Array<object>;
}
const Search = ({ data }: ISearch) => {
  const [searchInput, setSearchInput] = useState<string>();

  const handleSearch = () => {
    if (data !== undefined) {
      const filteredData = data.filter(
        (item: any) => item.customerName === searchInput
      );
      console.log(filteredData);
    }
  };
  console.log(searchInput);
  return (
    <div className="hidden md:flex w-fit h-12   px-4 py-2  items-center space-x-2 rounded-xl  border-2">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearchInput(e.target.value)}
        className="outline-none"
        placeholder="Search.."
      />
      <AiOutlineSearch
        onClick={() => handleSearch()}
        size={20}
        className="text-font_primary cursor-pointer"
      />
    </div>
  );
};

export default Search;
