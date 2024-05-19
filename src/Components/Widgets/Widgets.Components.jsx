import React from "react";
import './Widgets.Components.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function Widgets(){
    return (
        <>
            <div className="widgets">
                <div className="widgets__input">
                    <SearchOutlinedIcon className="widgets__searchIcon"/>
                    <input placeholder="Search Twitter" type="text"/>
                </div>
                <div className="widgets__widgetContainer">
                    <h2>What's happening</h2>
                    {/* <div className="widgets__" */}
                </div>
            </div>
        </>
    );
}