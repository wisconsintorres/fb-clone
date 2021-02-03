import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar'
import {AccountCircle, ExpandMoreOutlined, ThumbDown, ThumbUp} from "@material-ui/icons";


const Post = ({profilePic, imgName, timestamp, message, username}) => {

    return (
        <div className='post' >

            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar' />
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
                {/* image to come */}
            </div>

            <div className='post_options'>
                <div className='post_option'>
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className='post_option'>
                    <ThumbDown />
                    <p>Dislike</p>
                </div>
                <div className='post_option'>
                    <AccountCircle/>
                    <ExpandMoreOutlined />
                    <p>Share</p>
                </div>
            </div>

        </div>
    )


}

export default Post