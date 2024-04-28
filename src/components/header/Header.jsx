import React from "react";
import moment from "moment";
import { useState } from "react";

const Header = ({name}) => {

  return (
    <>
      <div className="pt-4 flex justify-between items-center">
        <div>
          <h3 className="text-text_primary text-[32px] font-medium capitalize">
            Hey, {name}
          </h3>
          <div className="flex text-sm mt-2 gap-5 text-text_secondary">
            <p>{moment().format("Do MMM YYYY")}</p>
            <p>{moment().format("h:mma")}</p>
          </div>
        </div>
        <div className="h-11 w-11">
          <img
            className="h-full w-full object-cover"
            src="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-pij2pwiy.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
