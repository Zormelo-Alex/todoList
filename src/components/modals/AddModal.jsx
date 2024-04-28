import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const AddModal = ({ onClose, onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
      onClose()
    }else{
        alert("Sorry, you can't add an empty task")
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center z-[10000] justify-center"
      onClick={onClose}
    >
      <div
        className="bg-bg_color text-text_primary p-6 rounded-lg shadow-md"
        onClick={handleModalClick}
      >
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold mb-4">Add Task</h2>
          <MdCancel onClick={onClose} className="cursor-pointer text-xl" />
        </div>
        <input
          type="text"
          value={taskText}
          onChange={handleTaskChange}
          placeholder="Enter task..."
          className="w-full border bg-secondary_bgcolor outline-none text-sm border-gray-300 rounded placeholder:text-xs placeholder:text-text_secondary px-3 py-2 mb-4"
        />
        <div className="w-full justify-center items-center">
          <button
            onClick={handleAddTask}
            className="bg-[#3674df] w-fit text-text_primary px-6 py-1 text-sm rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
