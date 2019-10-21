import React from "react";
import "./ShowHideMenu.css";

const ShowHideMenu = ({
  displayMenu,
  showDropdownMenu,
  dropdownItems,
  handleSelectAll,
  checked
}) => {
  return (
    <div class="multiselect">
      <div class="selectBox" onClick={showDropdownMenu}>
        <select className="dropdown_select">
          <option className="dropdown_option">Show/Hide Columns</option>
        </select>
        <div class="overSelect" />
      </div>
      {displayMenu && (
        <div className="menu">
          <div id="checkboxes">
            <label for="select-all">
              <input
                type="checkbox"
                checked={checked}
                id="select-all"
                onChange={handleSelectAll}
              />
              Select All
            </label>
              </div>
            <div className="scrollPosition">
            <label for="inheritance">
              <input type="checkbox" checked={checked} id="inheritance" />
              Inheritance
            </label>
            <label for="currency">
              <input type="checkbox" checked={checked} id="currency" />
              Currency
            </label>
            <label for="end-date">
              <input type="checkbox" checked={checked} id="end-date" />
              End Date
            </label>
            <label for="end-date">
              <input type="checkbox" checked={checked} id="end-date" />
              End Date
            </label>
            <label for="end-date">
              <input type="checkbox" checked={checked} id="end-date" />
              End Date
            </label>
            <label for="end-date">
              <input type="checkbox" checked={checked} id="end-date" />
              End Date
            </label>
            
            </div>
        
          <div className="buttonContainer">
            <button className="applyButton" >Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowHideMenu;
