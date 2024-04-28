import React, { useState } from "react";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";


const Task = ({ data, handleChecked, handleDelete }) => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    handleChecked(data.id)
  };

  return (
    <div className={`bg-secondary_bgcolor w-full p-3 rounded shadow-md flex justify-between transition-all ease-in ${(isChecked || data.completed) && "opacity-[50%]"}`}>
      <div className="flex flex-col gap-2">
        <h3 className={`text-text_primary max-w-[320px] sm:max-w-full overflow-hidden ${isChecked && "line-through"}`}>{data.task}</h3>
        <div className="flex text-text_secondary gap-3 text-xs">
          <p>{moment(data.date).format("Do MMM")}</p>
          <p>{moment(data.date).format("h:mma")}</p>
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-3`}>
        <MdDeleteForever className="text-text_primary cursor-pointer" onClick={()=> handleDelete(data.id)} title="Delete Task"/>
        <input title="Task status" type="checkbox" className="checkbox-custom" checked={data.completed || isChecked} onChange={handleCheckboxChange}/>
      </div>
    </div>
  );
};

export default Task;
