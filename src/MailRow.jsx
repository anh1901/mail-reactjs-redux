import { Checkbox } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { IconButton } from "material-ui";
import React from "react";
import "./MailRow.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { useHistory } from "react-router-dom";

export default function MailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  return (
    <MuiThemeProvider>
      <div onClick={() => history.push("/mail")} className="mailRow">
        <div className="mailRow_options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="mailRow_title">{title}</h3>
        <div className="mailRow_message">
          <h4>
            {subject}
            <span className="mailRow_description">-{description}</span>
          </h4>
        </div>
        <p className="mailRow_time">{time}</p>
      </div>
    </MuiThemeProvider>
  );
}
