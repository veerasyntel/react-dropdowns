import React from "react";
import "./style.css";

const Dropdown = ({ showDropdownMenu, displayMenu }) => {
  return (
    <div className="dropdown">
      <div className="button" onClick={showDropdownMenu}>
        Show Hide
      </div>
      { displayMenu ? (
        <ul>
          <li>
            <a href="#One">One</a>
          </li>
          <li>
            <a href="#Two">Two</a>
          </li>
          <li>
            <a href="#Three">Three</a>
          </li>
          <li>
            <a href="#Four">Four</a>
          </li>
          <li>
            <a href="#Five">Five</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
