import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ placeholder, onChange }) => {
  const [input, setinput] = useState("")
  return (
    <div className="flex items-center bg-secondary_bgcolor mt-12 rounded shadow-md">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full min-h-[40px] outline-none placeholder:text-xs text-sm placeholder:text-text_secondary text-text_primary bg-inherit rounded-l pl-2"
        onChange={(e)=> {
          setinput(e.target.value.trim())
          onChange(e.target.value.trim())
        }}
      />
      <div className="bg-[#3674df] min-h-[40px] flex justify-center items-center w-[50px] p-2 rounded-r" onClick={()=>onChange(input)}>
        <CiSearch className="w-full  h-full cursor-pointer text-text_primary"/>
      </div>
    </div>
  );
};

export default Search;
