import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import Dropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      displayMenu: false,
      dropdownItems: ["One", "Two", "Three", "Four", "Five", "Six", "One", "Two", "Three", "Four", "Five", "Six","One", "Two", "Three", "Four", "Five", "Six", "One", "Two", "Three", "Four", "Five", "Six"],
      itemSelected: "Two"
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
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
