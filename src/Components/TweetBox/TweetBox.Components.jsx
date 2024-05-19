import React, { useEffect } from "react";
import '../TweetBox/TweetBox.Components.css'
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import  from '@mui/material/Avatar';
import db, { auth } from "../Firebase/Firebase";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import firebase from 'firebase';

export default function TweetBox() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setTimeout(() => {
                    setName(user.displayName);
                    setEmail(user.email);
                    setImage(localStorage.getItem(user.email));
                    console.log(user);
                }, 1000);

            }
        })
    });

    const [tweet_text, newtweet] = useState("");
    const [tweet_image, newurltweet] = useState("");

    const post_tweet = e => {
        e.preventDefault();
        // setDoc(doc(db, "posts", "user"), {
        //     avatar: image,
        //     displayName: name,
        //     image: tweet_image,
        //     text: tweet_text,
        //     userName: email
        // });

        const docRef = addDoc(collection(db, "posts"), {
            avatar: image,
            displayName: name,
            image: tweet_image,
            likes: 0,
            text: tweet_text,
            userName: email,
            verified: true
          });

        newtweet("");
        newurltweet("");
    }

    return (
        <>
            <div className="tweetBox">
                <form>
                    <div className="tweetBox__input">
                        <Avatar src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/cut-out-an-image/thumbnail.jpeg" />
                        <input value={tweet_text} onChange={(e) => newtweet(e.target.value)} placeholder="Whst's happening?" type="text" />
                    </div>
                    <input value={tweet_image} onChange={(e) => newurltweet(e.target.value)} className="tweetBox__inputImage" placeholder="Optional: Enter image URL" type="text" />
                    <Button onClick={post_tweet} className="tweetBox__tweetButton">Tweet</Button>
                </form>
            </div>
        </>
    );
}