import "./SideBar.css";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import SideBarOption from "./SideBarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        Title="Inbox"
        Number={54}
        selected={true}
      />
      <SideBarOption Icon={StarIcon} Title="Marked" Number={54} />
      <SideBarOption Icon={AccessTimeIcon} Title="Hidden" Number={54} />
      <SideBarOption Icon={LabelImportantIcon} Title="Important" Number={54} />
      <SideBarOption Icon={NearMeIcon} Title="Sent" Number={54} />
      <SideBarOption Icon={NoteIcon} Title="Notes" Number={54} />
      <SideBarOption Icon={ExpandMoreIcon} Title="More" Number={54} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
