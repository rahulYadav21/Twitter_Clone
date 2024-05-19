import React from "react";
import './Sidebar.Components.css';
import SidebarOption from './SidebarOption.Components';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){
    const navigate = useNavigate();

    return (

        <>
            <div className="sidebar">
                <TwitterIcon className="sidebar__twitterIcon"/>

                <SidebarOption active Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={TagIcon} text="Explore"/>
                <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
                <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
                <SidebarOption Icon={ViewInArIcon} text="Twitter Blue"/>
                <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
                <SidebarOption Icon={MoreHorizIcon} text="More"/>

                <Button variant="outlined" className="sidebar__tweet " fullWidth>
                    Tweet
                </Button>
                <Button onClick={()=>{navigate("/")}} variant="outlined" className="sidebar__tweet_btn " fullWidth>
                    Log Out
                </Button>
            </div>
        </>
    );
}