import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddTask = ({handleAdd}) => {
  return (
    <div className="absolute bottom-[20px] centerAbs">
      <div onClick={handleAdd} className="w-[50px] h-[50px] shadow-lg cursor-pointer bg-[#3674df] rounded-full flex justify-center items-center">
        <IoMdAdd className="text-text_primary text-[20px]" />
      </div>
    </div>
  );
};

export default AddTask;
