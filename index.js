import React, { Component } from "react";
import { render } from "react-dom";
import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import Dropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";
import DatePickerComp from "./DatePickerComp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      dropdownItems: [
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six"
      ],
      itemSelected: ""
    };
  }

  showDropdownMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };
  handleChange = e => {
    this.setState({ itemSelected: e.target.value });
  };

  render() {
    const { displayMenu, dropdownItems, itemSelected } = this.state;
    // return (
    //   <div>
    //     <Dropdown
    //       displayMenu={displayMenu}
    //       showDropdownMenu={this.showDropdownMenu}
    //     />
    //   </div>
    // );
    return (
      <div>
        <DropdownMenu
          dropdownItems={dropdownItems}
          itemSelected={itemSelected}
          handleChange={this.handleChange}
        />
        <DatePickerComp />
        <Alert variant="dark">
          This is a warning alert—check it out!
        </Alert>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
