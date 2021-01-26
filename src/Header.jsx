import { IconButton, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import HelpIcon from "@material-ui/icons/Help";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://quoctetuminh.com/wp-content/uploads/2019/05/icon-email.png"
            alt="icon"
          />
          <Typography variant="h6" noWrap>
            Just Do It!
          </Typography>
        </div>
        <div className="header_middle">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder="Search…" type="text" />
          <ArrowDropDownIcon className="header_arrowCaret" />
        </div>
        <div className="header_right">
          <IconButton>
            <HelpIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>

          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Header;
