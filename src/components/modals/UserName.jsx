import React, { useState } from "react";

const UserName = ({ handleAddUser }) => {
  const [username, setusername] = useState("");
  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-[85%] flex items-center justify-center z-[1000000]">
      <div className="bg-bg_color text-text_primary p-6 rounded-lg shadow-md">
        <div className="flex justify-between"> 
          <h2 className="text-sm font-semibold mb-4">User Name</h2>
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value.trim())}
          placeholder="Enter username..."
          className="w-full border bg-secondary_bgcolor capitalize outline-none text-sm border-gray-300 rounded placeholder:text-xs placeholder:text-text_secondary px-3 py-2 mb-4"
        />
        <div className="w-full justify-center items-center">
          <button
            onClick={()=>handleAddUser(username)}
            className="bg-[#3674df] w-fit text-text_primary px-6 py-1 text-sm rounded hover:bg-blue-600"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserName;
