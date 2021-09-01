import React, { Component } from "react";
// import Item from "./Item";
import {
  Wrapper,
  Logo,
  // Line,
  Avatar,
  Image,
  AvatarInfo,
  AvatarName,
  AvatarEmail,
  NavItem,
  Item,
  ItemImg
} from "./sidebarStyle";
import logo from "../img/sierra-avatar.png";
import Dashboard from "../img/dashboard.svg";
import Tasks from "../img/tasks.png";
import Email from "../img/email.png";
import Contacts from "../img/contacts.png";
import Chat from "../img/chat.png";
import Deals from "../img/deals.png";
import Settings from "../img/settings.svg";
import Toggle from "../img/toggle.png";

export default class Sidebar extends Component {
  state = {
    isActive: "dashboard"
  };
  render() {
    return (
      <Wrapper>
        <Logo>SaaS Kit</Logo>
        <hr
          style={{
            position: "absolute",
            border: "1px solid #EAE6E6",
            backgroundColor: "#EAE6E6",
            top: 80,
            left: 7,
            width: 260
          }}
        />
        <Avatar>
          <Image src={logo} alt="image" />
          <AvatarInfo>
            <AvatarName>Sierra Ferguson</AvatarName>
            <AvatarEmail>s.ferguson@gmail.com</AvatarEmail>
          </AvatarInfo>
        </Avatar>

        <NavItem>
          <Item
            onClick={() => this.setState({ isActive: "dashboard" })}
            isActive={this.state.isActive === "dashboard"}
          >
            <ItemImg src={Dashboard} alt="dash" />
            Dashboard
          </Item>
          <Item
            onClick={() => this.setState({ isActive: "tasks" })}
            isActive={this.state.isActive === "tasks"}
          >
            <ItemImg src={Tasks} alt="task" />
            Tasks
          </Item>
          <Item
            onClick={() => this.setState({ isActive: "email" })}
            isActive={this.state.isActive === "email"}
          >
            <ItemImg src={Email} alt="email" />
            Email
          </Item>
          <Item
            onClick={() => this.setState({ isActive: "contact" })}
            isActive={this.state.isActive === "contact"}
          >
            <ItemImg src={Contacts} alt="contact" />
            Contacts
          </Item>

          <Item
            onClick={() => this.setState({ isActive: "chat" })}
            isActive={this.state.isActive === "chat"}
          >
            <ItemImg src={Chat} alt="chat" />
            Chats
          </Item>
          <Item
            onClick={() => this.setState({ isActive: "deals" })}
            isActive={this.state.isActive === "deals"}
          >
            <ItemImg src={Deals} alt="deals" />
            Deals
          </Item>

          <hr
            style={{
              position: "absolute",
              border: "1px solid #EAE6E6",
              backgroundColor: "#EAE6E6",
              top: 460,
              bottom: 200,
              left: 7,
              width: 275
            }}
          />

          <Item
            style={{ marginTop: 55 }}
            onClick={() => this.setState({ isActive: "settings" })}
            isActive={this.state.isActive === "settings"}
          >
            <ItemImg src={Settings} alt="settings" />
            Settings
          </Item>

          <Item
            style={{ marginTop: 351, marginBottom: 0 }}
            onClick={() => this.setState({ isActive: "toggle" })}
            isActive={this.state.isActive === "toggle"}
          >
            <ItemImg src={Toggle} alt="toggle" />
            Toggle sidebar
          </Item>
        </NavItem>
      </Wrapper>
    );
  }
}
