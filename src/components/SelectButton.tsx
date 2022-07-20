import React from "react";

interface IOptions {
  default: string;
  list: Array<number | string>;
}
const SelectButton = (props: IOptions) => {
  const years = props.list;
  return (
    <div className=" ">
      <select className="hidden md:block bg-[#F1F4F9] border border-font_primary text-gray-900 font-semibold rounded-xl  w-full px-4 py-3  ">
        <option selected className="uppercase">
          {props.default}
        </option>
        {years.map((item, index) => (
          <option key={index} className="uppercase">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectButton;
