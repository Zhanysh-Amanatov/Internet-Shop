import React, { useState } from "react";
import "./Dropdown.scss";
import options from "./DropdownOptions";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={handleActive}>
        Категории
        {!active ? (
          <RiArrowDownSLine className="arrow-icon" />
        ) : (
          <RiArrowUpSLine className="arrow-icon" />
        )}
      </div>
      {active && (
        <div className="dropdown-content">
          {options.map(function (option, index) {
            return (
              <li onClick={handleActive} key={index} className="list-item">
                {" "}
                <BsDot className="dot-icon" /> {option.name}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
