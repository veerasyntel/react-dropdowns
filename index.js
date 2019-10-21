import React, { Component } from "react";
import { render } from "react-dom";
import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import Dropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";
import DatePickerComp from "./DatePickerComp";
import ShowHideMenu from "./ShowHideMenu";

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
       
      ],
      itemSelected: "",
      checked: false
    };
  }

  showDropdownMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };
  handleChange = e => {
    this.setState({ itemSelected: e.target.value });
  };
  handleSelectAll = () => {
    this.setState({checked: !this.state.checked})
  }

  render() {
    const { displayMenu, dropdownItems, itemSelected, checked } = this.state;
    return (
      <div>
        <ShowHideMenu 
          displayMenu={displayMenu}
          showDropdownMenu={this.showDropdownMenu}
          dropdownItems={dropdownItems}
          handleSelectAll={this.handleSelectAll}
          checked={checked}
        />
      </div>
    )
    // return (
    //   <div>
    //     <Dropdown
    //       displayMenu={displayMenu}
    //       showDropdownMenu={this.showDropdownMenu}
    //       dropdownItems={dropdownItems}
    //     />
    //   </div>
    // );

    // return (
    //   <div>
    //     <DropdownMenu
    //       dropdownItems={dropdownItems}
    //       itemSelected={itemSelected}
    //       handleChange={this.handleChange}
    //     />
    
    //   </div>
    // );
  }
}

render(<App />, document.getElementById("root"));
