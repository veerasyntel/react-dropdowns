import React from "react";
import PropTypes from 'prop-types';
import { DropdownStyled } from './DropdownStyled';

const DropdownMenu = ({ dropdownItems, itemSelected, handleChange }) => {
  return (
    <DropdownStyled>
      <select
        className="dropdown_select"
        value={itemSelected}
        onChange={handleChange}
      >
        {dropdownItems.map((item, index) => (
          <option
            className="dropdown_option"
            name={item}
            key={index}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </DropdownStyled>
  );
};
export default DropdownMenu;

DropdownMenu.proptype = {
  dropdownItems: PropTypes.array,
  handleChange: PropTypes.func,
  itemSelected: PropTypes.string
}
DropdownMenu.defaultProps = {
  handleChange: () => {},
  dropdownItems: []
}

