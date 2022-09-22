import React from "react";
import "./css/sidebar.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice';

const Sidebar = () => {
    const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={375} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={25} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={32} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={86} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={91} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={11} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={5} />

      <div className="sidebar__footer">
            <div className="sidebar__footer--icons">
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

export default Sidebar;
