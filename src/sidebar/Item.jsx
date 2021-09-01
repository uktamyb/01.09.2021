import React, { Component } from "react";
import { Item, ItemIcons, ItemText } from "./itemStyle";

export default class item extends Component {
  state = {
    isActive: "Item"
  };
  render() {
    return (
      <Item>
        <ItemIcons src={this.props.img} alt="home" />
        <ItemText>{this.props.title}</ItemText>
      </Item>
    );
  }
}
