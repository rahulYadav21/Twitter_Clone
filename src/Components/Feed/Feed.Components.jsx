import React from "react";
import './Feed.Components.css';
import TweetBox from "../TweetBox/TweetBox.Components";
import Posts from "../Posts/Posts.components";
import { useState, useEffect } from "react";
import db from "../Firebase/Firebase";
import { collection,onSnapshot } from "firebase/firestore";

export default function Feed(){
    const [posts, setPost] = useState([]);

    // useEffect(()=>{
    //     db.collection('posts').onSnapshot(snapshot=>(
    //         setPost(snapshot.docs.map(doc=>doc.data()))
    //     ))
    // },[])

    useEffect(
        () =>
          onSnapshot(collection(db, "posts"), (snapshot) => {
            setPost(
              snapshot.docs.map((doc) => ({
                data: doc.data()
              }))
            );
            }
          ),
        []
      );

    return (
        <>
            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>

                <TweetBox/>
                {posts.map(post=>(
                    <Posts
                    displayName={post.data.displayName}
                    userName={post.data.userName}
                    verified={post.data.verified}
                    text={post.data.text}
                    avatar={post.data.avatar}
                    image={post.data.image}
                    />
                ))}
                
            </div>
        </>
    );
}