import React from 'react'
import Input from '../Input'
import './index.css'


const Chat = ({socket}) => {


    return (
        <div className='chat__container'>
            <h1>Soy el chat</h1>
            <Input socket={socket} />
        </div>
    )
}

export default Chat
