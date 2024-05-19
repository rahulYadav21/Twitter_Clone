import React from "react";
import './Posts.components.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { useState } from "react";

export default function Posts({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    likes
}){
    const [output, setOutput] = useState([]);
    const [comment, setComment] = useState(false);
    const [value, setValue] = useState('');
    const [likebtn, setLike] = useState(true);
    const [count, setCount] = useState(0);

    function ChangeLike() {
        likebtn ? setCount(count + 1) : setCount(count - 1);
        setLike(!likebtn);
        likes++;
    }
    function handleSubmit() {
        setOutput([...output, value]);
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <div className="post">
                <div className="post__avatar">
                    <Avatar src={avatar}/>
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>{displayName}{" "}<span className="post__headerSpacial">{verified && <VerifiedIcon className="post__verified"/>}</span></h3>
                            <small>@{userName}</small>
                        </div>
                        <div className="post__headerDiscription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="post__image">
                        <img src={image}/>
                    </div>
                    <div className="post__footer">
                        <div className="comment-icon" onClick={() => { setComment(!comment) }}>
                            <ChatBubbleOutlineOutlinedIcon/>
                        </div>
                        <RepeatOutlinedIcon/>
                        <div id="likes" onClick={(e) => { e.target.parentElement.className = likebtn ? "like-btn" : ""; ChangeLike();}}>
                            <FavoriteIcon  fontSize="small" className="like__btn"/>
                            <span className="likes-num">{count}</span>
                        </div>
                        <IosShareOutlinedIcon/>
                    </div>
                    <div className="border_comment">
                    {
                    comment ? <div className="comment-inp">
                        <input type="text" value={value} onChange={handleChange}/>
                        <button type="button" onClick={handleSubmit}>Comment</button>
                    </div> : ""
                }
                
                {output.map((data) =>
                    (<div className="comment-sec"><Avatar src={avatar} className="comment-dp" /><span className="comment-text">{data}</span></div>)
                )}</div>
                </div>
            </div>
        </>
    );
}