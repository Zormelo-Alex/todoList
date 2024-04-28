import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = ({handleFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex mt-4 relative">
        <div className="absolute right-[70px] w-[190px]">
          <select
            className={`w-full shadow-md rounded overflow-hidden transition-all duration-300 outline-none bg-secondary_bgcolor text-text_primary pl-2 ${
              isOpen ? "h-[40px]" : "h-[0px] opacity-0"
            }`}
            onChange={(e)=> handleFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-text_primary cursor-pointer w-[50px] p-2 h-[40px] shadow-md flex items-center justify-center rounded absolute right-0"
        >
          <CiFilter className="w-full h-full text-[#3674df]" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
