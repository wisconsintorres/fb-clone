import React, {useState} from "react";
import {Avatar, Input} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";
import './MessageSender.css';

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submitting')
    }
    return (

        <div className="messageSender">
            <div className='messageSender_top'>
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Joseph_Ducreux_%28French%29_-_Self-Portrait%2C_Yawning_-_Google_Art_Project.jpg/800px-Joseph_Ducreux_%28French%29_-_Self-Portrait%2C_Yawning_-_Google_Art_Project.jpg'/>
                <form>
                    <input type='text' className='messageSender_input' placeholder='What is up?' value={input} onChange={(e) => setInput(e.target.value)} />
                    <Input type='file' className='messageSender_fileSelector' onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='messageSender_bottom'>
                <div className='messageSender_option'>
                    <Videocam style={{ color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender_option'>
                    <PhotoLibrary style={{ color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender_option'>
                    <InsertEmoticon style={{ color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>



            </div>


        </div>
    )
}

export default MessageSender