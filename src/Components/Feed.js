import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender"
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
            profilePic='https://uwm.edu/informationstudies/wp-content/uploads/sites/229/2018/09/profile_torres_j2.jpg'
            message='Test message'
            timestamp = '1601493943737'
            imgName = 'imgName'
            username = 'Josh Test'
            />


        </div>
    )

}

export default Feed